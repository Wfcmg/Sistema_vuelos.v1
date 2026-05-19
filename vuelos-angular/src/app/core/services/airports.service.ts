import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import type { Airport, ApiSuccess } from '../models/domain';

// API pública de Booking publicada en Render.
// Base final:
// https://vuelos-api-gateway-wc.onrender.com/api/v1/william-carrion-booking
const BOOKING_API_URL = `${environment.apiUrl}/william-carrion-booking`;

function extractData<T>(res: any): T[] {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  return [];
}

@Injectable({ providedIn: 'root' })
export class AirportsService {
  private http = inject(HttpClient);

  getAll() {
    return this.http
      .get<ApiSuccess<Airport[]> | Airport[]>(`${BOOKING_API_URL}/airports`)
      .pipe(map(res => extractData<Airport>(res)));
  }

  search(query: string) {
    const q = (query ?? '').trim().toLowerCase();

    // La API pública Booking por ahora no tiene /airports/search,
    // así que se consulta /airports y se filtra en Angular.
    return this.getAll().pipe(
      map(airports =>
        airports.filter((airport: any) =>
          String(airport.iataCode ?? '').toLowerCase().includes(q) ||
          String(airport.name ?? '').toLowerCase().includes(q) ||
          String(airport.city ?? '').toLowerCase().includes(q) ||
          String(airport.country ?? '').toLowerCase().includes(q)
        )
      )
    );
  }
}
