import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import type { ApiSuccess, Flight, FlightSearchParams } from '../models/domain';

const BASE = 'http://localhost:3000/api/v1';

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

    return this.http.get<ApiSuccess<Flight[]>>(`${BASE}/flights/search`, { params: httpParams });
  }

  getAll() {
    return this.http.get<ApiSuccess<Flight[]>>(`${BASE}/flights`);
  }

  getById(id: string) {
    return this.http.get<ApiSuccess<Flight>>(`${BASE}/flights/${id}`);
  }

  create(body: Partial<Flight>) {
    return this.http.post<ApiSuccess<Flight>>(`${BASE}/flights`, body);
  }

  update(id: string, body: Partial<Flight>) {
    return this.http.put<ApiSuccess<Flight>>(`${BASE}/flights/${id}`, body);
  }

  remove(id: string) {
    return this.http.delete<ApiSuccess<unknown>>(`${BASE}/flights/${id}`);
  }
}

