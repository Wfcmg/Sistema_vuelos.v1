import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AirportSearchComponent } from '../../../shared/components/airport-search/airport-search.component';
import { FlightsService } from '../../../core/services/flights.service';
import type { Flight } from '../../../core/models/domain';

interface RouteCard {
  from: string;
  to: string;
  fromCity: string;
  toCity: string;
  price: number;
  date: string;
  color: string;
}

const ROUTE_COLORS = [
  'from-amber-500 via-orange-600 to-slate-950',
  'from-yellow-400 via-amber-600 to-stone-950',
  'from-orange-500 via-red-600 to-zinc-950',
  'from-fuchsia-500 via-rose-600 to-slate-950',
  'from-cyan-400 via-teal-600 to-slate-950',
  'from-emerald-400 via-lime-600 to-slate-950',
];

function dateOnly(value: string | null | undefined): string {
  if (!value) return new Date().toISOString().split('T')[0];
  return value.split('T')[0];
}

function lowestPrice(flight: Flight): number | null {
  const prices = (flight.flightClasses ?? [])
    .filter(fc => fc.availableSeats > 0)
    .map(fc => Number(fc.basePrice))
    .filter(price => Number.isFinite(price) && price > 0);

  return prices.length ? Math.min(...prices) : null;
}

function buildRecommendedRoutes(flights: Flight[]): RouteCard[] {
  const routes = new Map<string, RouteCard>();

  for (const flight of flights) {
    if (flight.status !== 'SCHEDULED' && flight.status !== 'DELAYED') continue;

    const price = lowestPrice(flight);
    if (price === null) continue;

    const from = flight.route?.originAirport?.iataCode ?? flight.originAirportIata;
    const to = flight.route?.destinationAirport?.iataCode ?? flight.destinationAirportIata;
    if (!from || !to) continue;

    const key = `${from}-${to}`;
    const route: RouteCard = {
      from,
      to,
      fromCity: flight.route?.originAirport?.city || from,
      toCity: flight.route?.destinationAirport?.city || to,
      price,
      date: dateOnly(flight.departureDate),
      color: ROUTE_COLORS[routes.size % ROUTE_COLORS.length],
    };

    const current = routes.get(key);
    if (!current || route.price < current.price) routes.set(key, route);
  }

  return [...routes.values()].sort((a, b) => a.price - b.price).slice(0, 6);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AirportSearchComponent],
  template: `
    <div class="min-h-screen bg-[#050816] overflow-hidden">
      <section class="relative bg-slate-950 text-white overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(217,119,6,0.20),_transparent_30%)]"></div>
        <div class="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div class="relative max-w-6xl mx-auto px-4 pt-20 pb-24">
          <div class="max-w-3xl mx-auto text-center mb-10">
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-xs font-semibold text-amber-100 mb-5 backdrop-blur">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              AeroWilly Tower · rutas listas para despegar
            </div>

            <h1 class="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Tu próximo destino despega aquí
              <span class="block text-amber-300">vuelos reales, rápidos y seguros</span>
            </h1>

            <p class="text-amber-100/80 text-base sm:text-lg mt-5">
              Busca origen y destino, compara tarifas disponibles y reserva tu asiento en segundos con AeroWilly.
            </p>
          </div>

          <div class="max-w-6xl mx-auto bg-[#0B1020]/95 backdrop-blur-xl rounded-3xl p-5 sm:p-7 shadow-[0_0_70px_rgba(245,158,11,0.16)] border border-white/20">
            <div class="grid grid-cols-1 sm:grid-cols-[1.2fr_auto_1.2fr_1fr] gap-4 items-start mb-5">
              <div>
                <label class="flex items-center gap-1.5 text-xs font-black text-slate-400 mb-2 uppercase tracking-wider">
                  <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  Origen
                </label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400 z-10 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  <app-airport-search #originSearch [value]="origin()" (valueChange)="origin.set($event)" placeholder="Ciudad o aeropuerto de salida" />
                </div>
                <p *ngIf="submitted && !origin()" class="text-xs text-red-500 mt-1.5 font-medium">Selecciona el origen</p>
              </div>

              <button type="button" (click)="swap()"
                class="w-11 h-11 flex items-center justify-center bg-[#111827] hover:bg-amber-50 text-slate-400 hover:text-amber-500 rounded-2xl transition-all mt-7 self-start border border-white/10 hover:border-amber-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
              </button>

              <div>
                <label class="flex items-center gap-1.5 text-xs font-black text-slate-400 mb-2 uppercase tracking-wider">
                  <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/></svg>
                  Destino
                </label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400 z-10 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/></svg>
                  <app-airport-search #destinationSearch [value]="destination()" (valueChange)="destination.set($event)" placeholder="Ciudad o aeropuerto de llegada" />
                </div>
                <p *ngIf="submitted && !destination()" class="text-xs text-red-500 mt-1.5 font-medium">Selecciona el destino</p>
              </div>

              <div>
                <label class="block text-xs font-black text-slate-400 mb-2 uppercase tracking-wider">Fecha de salida</label>
                <input [(ngModel)]="date" type="date" [min]="today"
                  class="w-full border-2 border-white/10 rounded-2xl px-4 py-3 text-sm text-white bg-[#0B1020] focus:ring-4 focus:ring-amber-100 focus:border-amber-500 outline-none transition-all" />
                <p *ngIf="submitted && !date" class="text-xs text-red-500 mt-1.5 font-medium">Selecciona la fecha</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <div>
                <label class="block text-xs font-black text-slate-400 mb-2 uppercase tracking-wider">Pasajeros</label>
                <div class="flex items-center gap-2 border-2 border-white/10 rounded-2xl px-3 py-2.5 bg-[#0B1020]">
                  <button type="button" (click)="changePassengers(-1)" [disabled]="passengers() <= 1"
                    class="w-7 h-7 flex items-center justify-center rounded-full bg-[#111827] hover:bg-[#1F2937] text-slate-300 disabled:opacity-40 transition-colors">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M20 12H4"/></svg>
                  </button>
                  <span class="w-8 text-center text-sm font-black text-white select-none">{{ passengers() }}</span>
                  <button type="button" (click)="changePassengers(1)" [disabled]="passengers() >= 9"
                    class="w-7 h-7 flex items-center justify-center rounded-full bg-[#111827] hover:bg-[#1F2937] text-slate-300 disabled:opacity-40 transition-colors">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 4v16m8-8H4"/></svg>
                  </button>
                  <span class="text-xs text-slate-400 ml-1 select-none">{{ passengers() === 1 ? 'adulto' : 'adultos' }}</span>
                </div>
              </div>

              <div>
                <label class="block text-xs font-black text-slate-400 mb-2 uppercase tracking-wider">Clase</label>
                <select [(ngModel)]="classType"
                  class="border-2 border-white/10 rounded-2xl px-4 py-3 text-sm text-slate-200 focus:ring-4 focus:ring-amber-100 focus:border-amber-500 outline-none bg-[#0B1020] transition-all">
                  <option value="">Cualquier clase</option>
                  <option value="ECONOMY">Económica</option>
                  <option value="BUSINESS">Business</option>
                  <option value="FIRST">Primera clase</option>
                </select>
              </div>

              <button type="button" (click)="onSearch()"
                class="sm:ml-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-white font-black px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-[0_0_45px_rgba(245,158,11,0.12)] hover:shadow-amber-500/30 w-full sm:w-auto">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/></svg>
                Buscar vuelos
              </button>
            </div>

            <p *ngIf="routeError()" class="text-xs text-red-500 mt-3 font-semibold">{{ routeError() }}</p>
          </div>

          <div class="max-w-6xl mx-auto mt-6" *ngIf="loadingRoutes() || routes().length > 0">
            <p class="text-amber-100 text-xs font-bold mb-3 uppercase tracking-wider">Rutas disponibles</p>
            <div *ngIf="loadingRoutes()" class="inline-flex items-center gap-2 text-xs text-amber-100 bg-white/10 border border-white/15 rounded-full px-4 py-2">
              <span class="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
              Cargando rutas desde la base...
            </div>
            <div *ngIf="!loadingRoutes()" class="flex flex-wrap gap-2">
              <button *ngFor="let r of routes()" type="button" (click)="quickSearch(r)"
                class="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2 rounded-full transition-colors border border-white/15 backdrop-blur">
                {{ r.fromCity }} &rarr; {{ r.toCity }}
                <span class="text-amber-200 font-black">desde &#36;{{ r.price | number:'1.0-0' }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div class="bg-[#0B1020] rounded-3xl p-6 border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.06)] hover:shadow-md transition-shadow">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-2xl mb-4">
            <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/></svg>
          </div>
          <h3 class="font-black text-white mb-2">Múltiples aerolíneas</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Compara vuelos con las aerolíneas disponibles en la base.</p>
        </div>

        <div class="bg-[#0B1020] rounded-3xl p-6 border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.06)] hover:shadow-md transition-shadow">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-4">
            <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="font-black text-white mb-2">Reserva segura</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Tus datos y pago están protegidos durante todo el proceso.</p>
        </div>

        <div class="bg-[#0B1020] rounded-3xl p-6 border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.06)] hover:shadow-md transition-shadow">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-2xl mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="font-black text-white mb-2">Confirmación inmediata</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Recibe tu código de reserva al instante después de pagar.</p>
        </div>
      </section>

      <section class="bg-gradient-to-br from-[#050816] via-[#090B16] to-[#1C1205] py-16 px-4 border-t border-amber-500/10">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <p class="text-xs font-black text-amber-500 uppercase tracking-wider mb-2">Ofertas activas</p>
              <h2 class="text-3xl font-black text-white">Rutas recomendadas</h2>
              <p class="text-sm text-slate-300 mt-2">Rutas reales disponibles en la base de datos.</p>
            </div>
          </div>

          <div *ngIf="loadingRoutes()" class="bg-white/5 border border-amber-500/10 rounded-3xl px-5 py-6 text-sm text-slate-400 shadow-[0_0_30px_rgba(245,158,11,0.06)]">
            Cargando ofertas desde la base...
          </div>

          <div *ngIf="!loadingRoutes() && routes().length === 0" class="bg-white/5 border border-amber-500/10 rounded-3xl px-5 py-6 text-sm text-slate-400 shadow-[0_0_30px_rgba(245,158,11,0.06)]">
            No hay vuelos con asientos disponibles para recomendar.
          </div>

          <div *ngIf="!loadingRoutes() && routes().length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <button *ngFor="let r of routes()" type="button" (click)="quickSearch(r)"
              [ngClass]="'bg-gradient-to-br ' + r.color"
              class="group text-white rounded-3xl p-6 text-left hover:-translate-y-1 transition-all shadow-[0_0_45px_rgba(245,158,11,0.12)] overflow-hidden relative">
              <div class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
              <div class="relative">
                <div class="flex items-center justify-between mb-5">
                  <div>
                    <span class="text-3xl font-black">{{ r.from }}</span>
                    <p class="text-xs opacity-75 mt-1">{{ r.fromCity }}</p>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                    <svg class="w-5 h-5 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 5l7 7-7 7"/></svg>
                  </div>
                  <div class="text-right">
                    <span class="text-3xl font-black">{{ r.to }}</span>
                    <p class="text-xs opacity-75 mt-1">{{ r.toCity }}</p>
                  </div>
                </div>

                <div class="border-t border-white/20 pt-4 mt-2">
                  <p class="text-xs opacity-75">desde</p>
                  <p class="text-4xl font-black">&#36;{{ r.price | number:'1.0-0' }}</p>
                  <p class="text-xs opacity-75 mt-1">por persona &middot; ida</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  @ViewChild('originSearch') private originSearch?: AirportSearchComponent;
  @ViewChild('destinationSearch') private destinationSearch?: AirportSearchComponent;

  private router = inject(Router);
  private flightsSvc = inject(FlightsService);

  today = new Date().toISOString().split('T')[0];
  passengers = signal(1);
  routes = signal<RouteCard[]>([]);
  loadingRoutes = signal(true);
  routeError = signal('');

  origin = signal('');
  destination = signal('');
  date = this.today;
  classType = '';
  submitted = false;

  ngOnInit() {
    this.loadRecommendedRoutes();
  }

  changePassengers(delta: number) {
    this.passengers.update(v => Math.min(9, Math.max(1, v + delta)));
  }

  swap() {
    const o = this.origin();
    this.origin.set(this.destination());
    this.destination.set(o);
  }

  quickSearch(route: RouteCard) {
    const params = new URLSearchParams({
      origin: route.from,
      destination: route.to,
      date: route.date,
      passengers: '1',
    });
    this.router.navigateByUrl(`/results?${params}`);
  }

  onSearch() {
    this.submitted = true;
    this.routeError.set('');

    const origin = this.origin() || this.originSearch?.resolveCurrentValue() || '';
    const destination = this.destination() || this.destinationSearch?.resolveCurrentValue() || '';

    this.origin.set(origin);
    this.destination.set(destination);

    if (!origin || !destination || !this.date) return;
    if (origin === destination) {
      this.routeError.set('Origen y destino no pueden ser el mismo aeropuerto.');
      return;
    }

    const params = new URLSearchParams({
      origin,
      destination,
      date: this.date,
      passengers: String(this.passengers()),
      ...(this.classType ? { class: this.classType } : {}),
    });
    this.router.navigateByUrl(`/results?${params}`);
  }

  private loadRecommendedRoutes() {
    this.loadingRoutes.set(true);
    this.flightsSvc.getAll().subscribe({
      next: res => {
        this.routes.set(buildRecommendedRoutes(res.data));
        this.loadingRoutes.set(false);
      },
      error: () => {
        this.routes.set([]);
        this.loadingRoutes.set(false);
      },
    });
  }
}





