import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import type { ApiSuccess, Flight, FlightSearchParams } from '../models/domain';

// API pública de Booking publicada en Render.
// Base final:
// https://vuelos-api-gateway-wc.onrender.com/api/v1/william-carrion-booking
const BOOKING_API_URL = `${environment.apiUrl}/william-carrion-booking`;

function cleanAirportCode(value: string | null | undefined): string {
  const raw = (value ?? '').trim().toUpperCase();

  // Si llega algo como "UIO - Quito", "UIO Quito" o "(UIO)",
  // se extrae solo el codigo IATA de 3 letras.
  const match = raw.match(/\b[A-Z]{3}\b/);
  return match ? match[0] : raw;
}

function cleanDate(value: string | null | undefined): string {
  // El backend busca por fecha YYYY-MM-DD.
  // Si llega ISO completo, se recorta a los primeros 10 caracteres.
  return (value ?? '').trim().slice(0, 10);
}

@Injectable({ providedIn: 'root' })
export class FlightsService {
  private http = inject(HttpClient);

  search(params: FlightSearchParams) {
    const origin = cleanAirportCode(params.origin);
    const destination = cleanAirportCode(params.destination);
    const date = cleanDate(params.date);

    let httpParams = new HttpParams()
      .set('origin', origin)
      .set('destination', destination)
      .set('date', date)
      .set('passengers', String(params.passengers));

    if (params.class) httpParams = httpParams.set('class', params.class);

    return this.http.get<ApiSuccess<Flight[]>>(`${BOOKING_API_URL}/flights/search`, {
      params: httpParams
    });
  }

  getAll() {
    // La API pública Booking no expone listado general /flights.
    // Para evitar llamadas a localhost o rutas internas, se usa una búsqueda demo pública.
    const params: FlightSearchParams = {
      origin: 'UIO',
      destination: 'SCL',
      date: '2026-07-15',
      passengers: 1
    };

    return this.search(params);
  }

  getById(id: string) {
    return this.http.get<ApiSuccess<Flight>>(`${BOOKING_API_URL}/flights/${id}`);
  }

  create(body: Partial<Flight>) {
    throw new Error('La API pública de Booking no permite crear vuelos desde el frontend público.');
  }

  update(id: string, body: Partial<Flight>) {
    throw new Error('La API pública de Booking no permite actualizar vuelos desde el frontend público.');
  }

  remove(id: string) {
    throw new Error('La API pública de Booking no permite eliminar vuelos desde el frontend público.');
  }
}