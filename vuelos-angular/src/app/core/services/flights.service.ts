import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import type { ApiSuccess, Flight, FlightClass, FlightSearchParams } from '../models/domain';

// API publica de Booking publicada en Render.
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

function normalizeAirport(raw: any) {
  return {
    id: raw?.id ?? null,
    iataCode: raw?.iataCode ?? raw?.code ?? '',
    name: raw?.name ?? '',
    city: typeof raw?.city === 'string' ? raw.city : (raw?.city?.name ?? ''),
    country: typeof raw?.country === 'string' ? raw.country : (raw?.country?.name ?? ''),
    timezone: raw?.timezone ?? ''
  };
}

function normalizeFlightClass(raw: any, flightId: string): FlightClass {
  const classType = raw?.classType ?? raw?.cabinClass ?? 'ECONOMY';

  return {
    id: raw?.id ?? raw?.flightClassId ?? '',
    flightId: raw?.flightId ?? flightId,
    cabinClass: classType,
    classType: classType,
    availableSeats: Number(raw?.availableSeats ?? 0),
    basePrice: Number(raw?.basePrice ?? 0)
  };
}

function normalizeFlight(raw: any): Flight {
  const id = raw?.id ?? raw?.flightId ?? '';

  const originIata =
    raw?.originAirportIata ??
    raw?.origin ??
    raw?.route?.originAirport?.iataCode ??
    '';

  const destinationIata =
    raw?.destinationAirportIata ??
    raw?.destination ??
    raw?.route?.destinationAirport?.iataCode ??
    '';

  const rawClasses = raw?.flightClasses ?? raw?.classes ?? [];

  return {
    id,
    originAirportIata: originIata,
    destinationAirportIata: destinationIata,
    departureDate: raw?.departureDate ?? raw?.departureDateTime ?? '',
    departureDateTime: raw?.departureDateTime ?? raw?.departureDate ?? null,
    arrivalDateTime: raw?.arrivalDateTime ?? null,
    status: raw?.status ?? 'SCHEDULED',
    duration: Number(raw?.duration ?? raw?.route?.estimatedDuration ?? 0),
    stops: Number(raw?.stops ?? 0),
    lowestPrice: Number(raw?.lowestPrice ?? raw?.basePrice ?? 0),
    flightNumber: raw?.flightNumber ?? '',
    airline:
      typeof raw?.airline === 'string'
        ? {
            id: 'airline-public-booking',
            iataCode: '',
            name: raw.airline,
            countryId: ''
          }
        : raw?.airline ?? null,
    aircraft:
      typeof raw?.aircraft === 'string'
        ? raw.aircraft
        : raw?.aircraft?.modelName ?? null,
    route: {
      estimatedDuration: Number(raw?.route?.estimatedDuration ?? raw?.duration ?? 0),
      originAirport: normalizeAirport(raw?.route?.originAirport ?? {
        iataCode: originIata,
        name: originIata
      }),
      destinationAirport: normalizeAirport(raw?.route?.destinationAirport ?? {
        iataCode: destinationIata,
        name: destinationIata
      })
    },
    segments: raw?.segments ?? [],
    flightClasses: rawClasses.map((fc: any) => normalizeFlightClass(fc, id))
  };
}

function normalizeFlightListResponse(res: any): ApiSuccess<Flight[]> {
  return {
    ...res,
    success: true,
    data: Array.isArray(res?.data) ? res.data.map(normalizeFlight) : []
  };
}

function normalizeFlightDetailResponse(res: any): ApiSuccess<Flight> {
  return {
    ...res,
    success: true,
    data: normalizeFlight(res?.data)
  };
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

    return this.http
      .get<ApiSuccess<Flight[]>>(`${BOOKING_API_URL}/flights/search`, {
        params: httpParams
      })
      .pipe(map(res => normalizeFlightListResponse(res)));
  }

  getAll() {
    const params: FlightSearchParams = {
      origin: 'UIO',
      destination: 'SCL',
      date: '2026-07-15',
      passengers: 1
    };

    return this.search(params);
  }

  getById(id: string) {
    return this.http
      .get<ApiSuccess<Flight>>(`${BOOKING_API_URL}/flights/${id}`)
      .pipe(map(res => normalizeFlightDetailResponse(res)));
  }

  create(body: Partial<Flight>) {
    throw new Error('La API publica de Booking no permite crear vuelos desde el frontend publico.');
  }

  update(id: string, body: Partial<Flight>) {
    throw new Error('La API publica de Booking no permite actualizar vuelos desde el frontend publico.');
  }

  remove(id: string) {
    throw new Error('La API publica de Booking no permite eliminar vuelos desde el frontend publico.');
  }
}
