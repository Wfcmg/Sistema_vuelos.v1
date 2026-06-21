import type {
  Airport,
  Flight,
  FlightClass,
  PassengerDraft,
  StoredReservation,
} from '../types/booking';

export const BOOKING_BASE_URL =
  'https://vuelos-api-gateway-wc.onrender.com/api/v1/william-carrion-booking';

export const GATEWAY_BASE_URL = 'https://vuelos-api-gateway-wc.onrender.com';

function unwrapArray<T>(json: any): T[] {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.items)) return json.items;
  if (Array.isArray(json?.reservations)) return json.reservations;
  if (Array.isArray(json?.data?.reservations)) return json.data.reservations;
  if (Array.isArray(json?.data?.items)) return json.data.items;
  if (Array.isArray(json?.occupiedSeats)) return json.occupiedSeats;
  if (Array.isArray(json?.seats)) return json.seats;
  if (Array.isArray(json?.result)) return json.result;
  return [];
}

function toNumber(value: unknown, fallback = 0): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function uuidV4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function authHeaders(token?: string): Record<string, string> {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function requestJsonFull(url: string, init?: RequestInit) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  const text = await res.text();
  let json: any = null;

  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }

  if (!res.ok) {
    const msg =
      json?.error?.message ||
      json?.message ||
      json?.error ||
      text ||
      `Error HTTP ${res.status}`;
    throw new Error(String(msg));
  }

  return json;
}

async function requestJson(path: string, init?: RequestInit) {
  return requestJsonFull(`${BOOKING_BASE_URL}${path}`, init);
}

export function getFlightId(flight: Flight) {
  return String(flight.flightId ?? flight.id ?? 'flight-uio-lim-scl-001');
}

export function getFlightNumber(flight: Flight) {
  return String(flight.flightNumber ?? getFlightId(flight));
}

export function getOrigin(flight: Flight) {
  return String(flight.origin ?? flight.originAirportIata ?? 'UIO');
}

export function getDestination(flight: Flight) {
  return String(flight.destination ?? flight.destinationAirportIata ?? 'SCL');
}

export function getPrice(value: unknown) {
  return toNumber(value, 0);
}

export function getFlightClasses(flight: Flight): FlightClass[] {
  const raw = (flight.classes ?? flight.flightClasses ?? []) as FlightClass[];

  return raw.map((item, index) => ({
    ...item,
    flightClassId: item.flightClassId ?? item.id ?? `fc-mobile-${index}`,
    cabinClass: item.cabinClass ?? 'ECONOMY',
    availableSeats: toNumber(item.availableSeats, 0),
    basePrice: toNumber(item.basePrice, toNumber(flight.lowestPrice, 250)),
  }));
}

function normalizeSeatList(json: any): string[] {
  const arr = unwrapArray<any>(json);

  return arr
    .map((item) => {
      if (typeof item === 'string') return item;
      return (
        item?.seatNumber ??
        item?.seat ??
        item?.seat_number ??
        item?.number ??
        item?.code ??
        ''
      );
    })
    .filter(Boolean)
    .map((x) => String(x).trim().toUpperCase());
}

function normalizeReservation(input: any): StoredReservation {
  const r = input?.data?.reservation ?? input?.data ?? input?.reservation ?? input;
  const passengers = Array.isArray(r?.passengers)
    ? r.passengers
    : Array.isArray(r?.reservationPassengers)
      ? r.reservationPassengers
      : [];

  const firstPassenger = passengers[0] ?? r?.passenger ?? {};
  const rawFlight = r?.flight ?? r?.flightData ?? firstPassenger?.flight ?? {};
  const rawClass =
    r?.selectedClass ??
    r?.flightClass ??
    firstPassenger?.flightClass ??
    r?.class ??
    {};

  const flight: Flight = {
    ...rawFlight,
    flightId: rawFlight?.flightId ?? rawFlight?.id ?? r?.flightId ?? 'flight-uio-lim-scl-001',
    flightNumber: rawFlight?.flightNumber ?? rawFlight?.number ?? r?.flightNumber,
    origin: rawFlight?.origin ?? rawFlight?.originAirportIata ?? r?.origin,
    destination: rawFlight?.destination ?? rawFlight?.destinationAirportIata ?? r?.destination,
    airline: rawFlight?.airline?.name ?? rawFlight?.airline ?? r?.airline,
    lowestPrice: rawFlight?.lowestPrice ?? r?.totalAmount ?? r?.amount,
  };

  const selectedClass: FlightClass = {
    ...rawClass,
    id: rawClass?.id,
    flightClassId:
      rawClass?.flightClassId ??
      rawClass?.id ??
      firstPassenger?.flightClassId ??
      r?.flightClassId ??
      '',
    cabinClass: rawClass?.cabinClass ?? rawClass?.class ?? 'ECONOMY',
    availableSeats: toNumber(rawClass?.availableSeats, 0),
    basePrice: toNumber(rawClass?.basePrice, toNumber(r?.totalAmount, 0)),
  };

  const rawStatus = String(r?.status ?? 'CONFIRMED').toUpperCase();

  return {
    id: String(r?.id ?? r?.reservationId ?? ''),
    reservationCode: String(r?.reservationCode ?? r?.code ?? r?.bookingCode ?? 'SIN-CODIGO'),
    status:
      rawStatus === 'CANCELLED'
        ? 'CANCELLED'
        : rawStatus === 'PENDING'
          ? 'PENDING'
          : 'CONFIRMED',
    flight,
    selectedClass,
    passenger: {
      firstName: String(firstPassenger?.firstName ?? firstPassenger?.name ?? 'Pasajero'),
      lastName: String(firstPassenger?.lastName ?? firstPassenger?.firstLastName ?? ''),
      documentNumber: String(firstPassenger?.documentNumber ?? firstPassenger?.document ?? 'N/D'),
    },
    seatNumber: String(firstPassenger?.seatNumber ?? r?.seatNumber ?? 'S/A'),
    totalAmount: toNumber(r?.totalAmount ?? r?.amount ?? r?.payment?.amount ?? selectedClass.basePrice, 0),
    invoiceNumber: String(
      r?.invoiceNumber ??
        r?.invoice?.invoiceNumber ??
        r?.payment?.invoice?.invoiceNumber ??
        'Pendiente'
    ),
    paymentMethod: String(r?.paymentMethod ?? r?.payment?.provider ?? 'Pendiente'),
    createdAt: String(r?.createdAt ?? new Date().toISOString()),
  };
}

export async function getAirports(): Promise<Airport[]> {
  const json = await requestJson('/airports');
  return unwrapArray<Airport>(json);
}

export async function searchFlights(params: {
  origin: string;
  destination: string;
  date: string;
  passengers: string;
  cabinClass: string;
}): Promise<Flight[]> {
  const query = new URLSearchParams({
    origin: params.origin.trim().toUpperCase(),
    destination: params.destination.trim().toUpperCase(),
    date: params.date.trim(),
    passengers: params.passengers.trim() || '1',
    class: params.cabinClass.trim().toUpperCase() || 'ECONOMY',
  });

  const json = await requestJson(`/flights/search?${query.toString()}`);
  const flights = unwrapArray<Flight>(json);

  return flights.map((flight) => ({
    ...flight,
    flightId: flight.flightId ?? flight.id,
    origin: getOrigin(flight),
    destination: getDestination(flight),
    flightNumber: getFlightNumber(flight),
    lowestPrice: getPrice(flight.lowestPrice),
    classes: getFlightClasses(flight),
  }));
}

export async function getOccupiedSeats(flightClassId: string): Promise<string[]> {
  const id = encodeURIComponent(String(flightClassId));

  const urls = [
    `${BOOKING_BASE_URL}/flight-classes/${id}/occupied-seats`,
    `${BOOKING_BASE_URL}/flight-classes/${id}/seats/occupied`,
    `${BOOKING_BASE_URL}/occupied-seats?flightClassId=${id}`,
    `${BOOKING_BASE_URL}/seats/occupied?flightClassId=${id}`,
    `${BOOKING_BASE_URL}/reservations/occupied-seats?flightClassId=${id}`,
    `${GATEWAY_BASE_URL}/api/v1/flight-classes/${id}/occupied-seats`,
    `${GATEWAY_BASE_URL}/api/v1/seats/occupied?flightClassId=${id}`,
  ];

  for (const url of urls) {
    try {
      const json = await requestJsonFull(url);
      const seats = normalizeSeatList(json);
      if (seats.length > 0) return seats;
    } catch {
      // sigue probando
    }
  }

  return [];
}

export async function getMyReservations(params: {
  userId: string;
  token?: string;
}): Promise<StoredReservation[]> {
  const userId = encodeURIComponent(String(params.userId));

  const attempts = [
    {
      url: `${GATEWAY_BASE_URL}/api/v1/reservations/my`,
      headers: authHeaders(params.token),
    },
    {
      url: `${GATEWAY_BASE_URL}/api/v1/reservations?userId=${userId}`,
      headers: authHeaders(params.token),
    },
    {
      url: `${GATEWAY_BASE_URL}/api/reservations?userId=${userId}`,
      headers: authHeaders(params.token),
    },
    {
      url: `${BOOKING_BASE_URL}/reservations?userId=${userId}`,
      headers: {},
    },
  ];

  const errors: string[] = [];

  for (const attempt of attempts) {
    try {
      const json = await requestJsonFull(attempt.url, {
        method: 'GET',
        headers: attempt.headers,
      });

      const rows = unwrapArray<any>(json);
      return rows.map(normalizeReservation).filter((x) => Boolean(x.id));
    } catch (err) {
      errors.push(`${attempt.url}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  throw new Error(`No se pudieron cargar reservas reales. ${errors[0] ?? ''}`);
}

export async function getReservationById(params: {
  reservationId: string;
  token?: string;
}): Promise<StoredReservation> {
  const id = encodeURIComponent(String(params.reservationId));

  const attempts = [
    `${GATEWAY_BASE_URL}/api/v1/reservations/${id}`,
    `${GATEWAY_BASE_URL}/api/reservations/${id}`,
    `${BOOKING_BASE_URL}/reservations/${id}`,
  ];

  for (const url of attempts) {
    try {
      const json = await requestJsonFull(url, {
        method: 'GET',
        headers: authHeaders(params.token),
      });
      return normalizeReservation(json);
    } catch {
      // sigue probando
    }
  }

  throw new Error('No se pudo cargar el detalle real de la reserva.');
}

export async function createReservation(params: {
  userId: string;
  flightClassId: string;
  passenger: PassengerDraft;
  seatNumber: string;
}) {
  const body = {
    userId: params.userId,
    flightClassId: params.flightClassId,
    passengers: [
      {
        firstName: params.passenger.firstName,
        lastName: params.passenger.lastName,
        documentNumber: params.passenger.documentNumber,
        seatNumber: params.seatNumber,
      },
    ],
  };

  const json = await requestJson('/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Idempotency-Key': uuidV4(),
    },
    body: JSON.stringify(body),
  });

  return json?.data ?? json;
}

export async function cancelReservation(params: {
  reservationId: string;
  userId: string;
}) {
  const json = await requestJson(
    `/reservations/${encodeURIComponent(params.reservationId)}/cancel`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Idempotency-Key': uuidV4(),
      },
      body: JSON.stringify({
        userId: params.userId,
      }),
    }
  );

  return json?.data ?? json;
}


export async function createPayment(params: {
  reservationId: string;
  amount: number;
  provider: string;
  transactionId: string;
  token?: string;
}) {
  const json = await requestJsonFull(`${GATEWAY_BASE_URL}/api/v1/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(params.token),
    },
    body: JSON.stringify({
      reservationId: params.reservationId,
      amount: params.amount,
      provider: params.provider,
      transactionId: params.transactionId,
      status: 'COMPLETED',
    }),
  });

  return json?.data ?? json;
}

export async function getPaymentsByReservation(params: {
  reservationId: string;
  token?: string;
}) {
  const json = await requestJsonFull(
    `${GATEWAY_BASE_URL}/api/v1/payments/by-reservation/${encodeURIComponent(params.reservationId)}`,
    {
      method: 'GET',
      headers: authHeaders(params.token),
    }
  );

  return unwrapArray<any>(json);
}

export async function getInvoiceByPayment(params: {
  paymentId: string;
  token?: string;
}) {
  const json = await requestJsonFull(
    `${GATEWAY_BASE_URL}/api/v1/invoices/by-payment/${encodeURIComponent(params.paymentId)}`,
    {
      method: 'GET',
      headers: authHeaders(params.token),
    }
  );

  return json?.data ?? json;
}

export async function waitInvoiceByPayment(params: {
  paymentId: string;
  token?: string;
}) {
  for (let i = 0; i < 6; i++) {
    try {
      const invoice = await getInvoiceByPayment(params);
      if (invoice?.invoiceNumber) return invoice;
    } catch {
      // factura puede demorar un poquito porque se genera automatico
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  return null;
}

