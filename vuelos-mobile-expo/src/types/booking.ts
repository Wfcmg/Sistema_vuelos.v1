export type CabinClass = 'ECONOMY' | 'BUSINESS' | 'FIRST' | 'PREMIUM_ECONOMY' | string;

export type Airport = {
  id?: string;
  iataCode: string;
  name?: string;
  city?: string;
  country?: string;
  timezone?: string;
};

export type FlightClass = {
  id?: string;
  flightClassId?: string;
  cabinClass: CabinClass;
  availableSeats: number;
  basePrice: number | string;
};

export type Flight = {
  id?: string;
  flightId?: string;
  flightNumber?: string;
  origin?: string;
  destination?: string;
  originAirportIata?: string;
  destinationAirportIata?: string;
  departureDate?: string;
  departureDateTime?: string;
  arrivalDateTime?: string;
  status?: string;
  duration?: number;
  stops?: number;
  lowestPrice?: number | string;
  airline?: string;
  aircraft?: string;
  classes?: FlightClass[];
  flightClasses?: FlightClass[];
  [key: string]: unknown;
};

export type PassengerDraft = {
  firstName: string;
  lastName: string;
  documentNumber: string;
};

export type UserSession = {
  id: string;
  name: string;
  email: string;
  token?: string;
};

export type StoredReservation = {
  id: string;
  reservationCode: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | string;
  flight: Flight;
  selectedClass: FlightClass;
  passenger: PassengerDraft;
  seatNumber: string;
  totalAmount: number;
  invoiceNumber: string;
  paymentMethod: string;
  createdAt: string;
};
