import 'dotenv/config';
import * as amqp from 'amqplib';
import { EventBus } from '../shared/events/EventBus.js';
import { DomainEvents } from '../shared/events/domain-events.js';

const rabbitUrl = process.env.RABBITMQ_URL;
const exchange = process.env.EVENT_BUS_EXCHANGE ?? 'vuelos.domain.events';

if (!rabbitUrl) {
  console.error('[TEST] Falta RABBITMQ_URL en .env');
  process.exit(1);
}

const connection = await amqp.connect(rabbitUrl);
const channel = await connection.createChannel();

await channel.assertExchange(exchange, 'topic', { durable: true });

const queueName = 'vuelos.events.test';
await channel.assertQueue(queueName, { durable: false, autoDelete: true });
await channel.bindQueue(queueName, exchange, '#');

console.log('[TEST] Esperando evento desde RabbitMQ...');

await channel.consume(queueName, async (msg) => {
  if (!msg) return;

  console.log('[TEST] EVENTO RECIBIDO:');
  console.log(msg.content.toString('utf8'));

  channel.ack(msg);
  await channel.close();
  await connection.close();
  process.exit(0);
});

EventBus.publish({
  eventType: DomainEvents.PAYMENT_REGISTERED,
  eventVersion: 1,
  producer: 'test-script',
  correlationId: 'test-rabbitmq-v2',
  payload: {
    paymentId: 'pay-test-001',
    reservationId: 'res-test-001',
    amount: 100,
    status: 'TEST',
  },
});

setTimeout(() => {
  console.error('[TEST] No llegó ningún evento.');
  process.exit(1);
}, 8000);
