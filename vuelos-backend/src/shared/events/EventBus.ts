import { EventEmitter } from 'node:events';
import { randomUUID } from 'node:crypto';
import * as amqp from 'amqplib';
import type { Channel, ChannelModel } from 'amqplib';

export interface DomainEvent<P = unknown> {
  eventId: string;
  eventType: string;
  eventVersion: number;
  occurredAt: string;
  producer: string;
  correlationId?: string;
  payload: P;
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

class EventBusV2 extends EventEmitter {
  private connection?: ChannelModel;
  private channel?: Channel;
  private connectionPromise?: Promise<Channel | null>;
  private warnedMissingUrl = false;

  private readonly provider = (process.env.EVENT_BUS_PROVIDER ?? 'memory').toLowerCase();
  private readonly exchange = process.env.EVENT_BUS_EXCHANGE ?? 'vuelos.domain.events';

  publish<P>(event: Omit<DomainEvent<P>, 'eventId' | 'occurredAt'>): void {
    const full: DomainEvent<P> = {
      eventId: randomUUID(),
      occurredAt: new Date().toISOString(),
      ...event,
    };

    // Mantiene compatibilidad con el bus interno existente.
    this.emit(event.eventType, full);
    this.emit('*', full);

    // Publicación externa no bloqueante hacia RabbitMQ / CloudAMQP.
    void this.publishToRabbitMQ(full);
  }

  subscribe<P>(eventType: string, handler: (e: DomainEvent<P>) => void): void {
    this.on(eventType, handler);
  }

  subscribeAll(handler: (e: DomainEvent) => void): void {
    this.on('*', handler);
  }

  private async publishToRabbitMQ<P>(event: DomainEvent<P>): Promise<void> {
    if (this.provider !== 'rabbitmq') return;

    try {
      const channel = await this.getRabbitChannel();
      if (!channel) return;

      const routingKey = `${event.producer}.${event.eventType}`;

      const published = channel.publish(
        this.exchange,
        routingKey,
        Buffer.from(JSON.stringify(event), 'utf8'),
        {
          contentType: 'application/json',
          persistent: true,
          messageId: event.eventId,
          type: event.eventType,
          correlationId: event.correlationId,
          timestamp: Math.floor(Date.parse(event.occurredAt) / 1000),
          headers: {
            producer: event.producer,
            eventVersion: event.eventVersion,
          },
        },
      );

      if (!published) {
        console.warn(`[EventBusV2] RabbitMQ aplicó backpressure para ${event.eventType}`);
      }
    } catch (error) {
      console.warn(`[EventBusV2] No se pudo publicar evento en RabbitMQ: ${getErrorMessage(error)}`);
    }
  }

  private async getRabbitChannel(): Promise<Channel | null> {
    const url = process.env.RABBITMQ_URL;

    if (!url) {
      if (!this.warnedMissingUrl) {
        console.warn('[EventBusV2] EVENT_BUS_PROVIDER=rabbitmq pero RABBITMQ_URL no está configurado.');
        this.warnedMissingUrl = true;
      }
      return null;
    }

    if (this.channel) return this.channel;

    if (!this.connectionPromise) {
      this.connectionPromise = this.createRabbitChannel(url);
    }

    return this.connectionPromise;
  }

  private async createRabbitChannel(url: string): Promise<Channel | null> {
    try {
      this.connection = await amqp.connect(url);

      this.connection.on('error', (error) => {
        console.warn(`[EventBusV2] Error de conexión RabbitMQ: ${getErrorMessage(error)}`);
      });

      this.connection.on('close', () => {
        console.warn('[EventBusV2] Conexión RabbitMQ cerrada.');
        this.connection = undefined;
        this.channel = undefined;
        this.connectionPromise = undefined;
      });

      this.channel = await this.connection.createChannel();

      await this.channel.assertExchange(this.exchange, 'topic', {
        durable: true,
      });

      console.log(`[EventBusV2] RabbitMQ conectado. Exchange: ${this.exchange}`);

      return this.channel;
    } catch (error) {
      console.warn(`[EventBusV2] No se pudo conectar a RabbitMQ: ${getErrorMessage(error)}`);
      this.connection = undefined;
      this.channel = undefined;
      this.connectionPromise = undefined;
      return null;
    }
  }
}

export const EventBus = new EventBusV2();
EventBus.setMaxListeners(100);
