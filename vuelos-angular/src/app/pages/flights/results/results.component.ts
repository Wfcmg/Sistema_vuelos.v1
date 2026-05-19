import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightsService } from '../../../core/services/flights.service';
import type { Flight, FlightSearchParams } from '../../../core/models/domain';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function formatDuration(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m > 0 ? `${m}m` : ''}`;
}

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-[#050816]">
      <section class="relative bg-slate-950 text-white overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(217,119,6,0.20),_transparent_32%)]"></div>
        <div class="relative max-w-6xl mx-auto px-4 py-10">
          <button type="button" (click)="router.navigate(['/'])"
            class="inline-flex items-center gap-2 text-sm font-semibold text-amber-100 hover:text-white transition-colors mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M15 19l-7-7 7-7"/>
            </svg>
            Nueva búsqueda
          </button>

          <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p class="text-xs font-black text-amber-300 uppercase tracking-wider mb-2">Cabina de resultados</p>
              <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
                {{ params().origin }} <span class="text-amber-300">→</span> {{ params().destination }}
              </h1>
              <p class="text-amber-100/80 mt-3">
                {{ formattedDate() }} · {{ params().passengers }} {{ params().passengers === 1 ? 'pasajero' : 'pasajeros' }}
              </p>
            </div>

            <div class="bg-white/10 border border-white/15 rounded-2xl p-3 backdrop-blur">
              <label class="flex items-center gap-2 text-xs font-bold text-amber-100 mb-2 uppercase tracking-wider">
                <svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                </svg>
                Ordenar por
              </label>
              <select [(ngModel)]="sortBy"
                class="w-full min-w-48 text-sm border border-white/20 rounded-xl px-4 py-2.5 bg-[#0B1020] text-slate-100 focus:ring-4 focus:ring-amber-500/20 outline-none">
                <option value="departure">Hora de salida</option>
                <option value="price">Precio</option>
                <option value="duration">Duración</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <main class="max-w-6xl mx-auto px-4 py-8">
        <div *ngIf="loading()" class="bg-[#0B1020] border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 shadow-[0_0_30px_rgba(245,158,11,0.06)]">
          <svg class="w-9 h-9 animate-spin text-amber-500" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <p class="text-sm font-semibold text-slate-400">Buscando los mejores vuelos...</p>
        </div>

        <div *ngIf="error()" class="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-5">
          <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-sm font-medium text-red-700">{{ error() }}</p>
        </div>

        <div *ngIf="!loading() && !error() && sorted().length === 0" class="bg-[#0B1020] border border-white/10 rounded-3xl text-center py-20 px-6 shadow-[0_0_30px_rgba(245,158,11,0.06)]">
          <div class="w-16 h-16 rounded-3xl bg-[#111827] mx-auto mb-5 flex items-center justify-center">
            <svg class="w-9 h-9 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/>
            </svg>
          </div>
          <h2 class="text-xl font-black text-slate-100 mb-2">Sin vuelos disponibles</h2>
          <p class="text-sm text-slate-400 mb-6">No encontramos vuelos para esta ruta y fecha.</p>
          <button (click)="router.navigate(['/'])" class="bg-amber-500 hover:bg-amber-400 text-white font-black px-6 py-3 rounded-2xl transition-colors">
            Buscar otra ruta
          </button>
        </div>

        <div class="space-y-5">
          <article *ngFor="let flight of sorted()"
            class="group bg-[#0B1020] rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.06)] hover:shadow-[0_0_45px_rgba(245,158,11,0.12)] hover:-translate-y-0.5 transition-all overflow-hidden">
            <div class="p-5 sm:p-6">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100">
                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-black text-white">{{ flight.airline?.name ?? 'Aerolínea' }}</p>
                    <p class="text-xs text-slate-400 font-mono">{{ flight.flightNumber ?? flight.originAirportIata }}</p>
                  </div>
                </div>

                <span [class]="'w-fit text-xs px-3 py-1 rounded-full font-black ' + (flight.status === 'SCHEDULED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100')">
                  {{ flight.status === 'SCHEDULED' ? 'A tiempo' : flight.status }}
                </span>
              </div>

              <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6 mb-6">
                <div>
                  <p class="text-3xl sm:text-4xl font-black text-white">{{ depTime(flight) }}</p>
                  <p class="text-sm font-black text-slate-400">{{ flight.route?.originAirport?.iataCode ?? flight.originAirportIata }}</p>
                  <p class="text-xs text-slate-400">{{ flight.route?.originAirport?.city ?? '' }}</p>
                </div>

                <div class="flex flex-col items-center gap-2">
                  <p class="text-xs text-slate-400 flex items-center gap-1 font-semibold">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ durationStr(flight) || 'Directo' }}
                  </p>
                  <div class="w-full flex items-center gap-2">
                    <div class="flex-1 h-px bg-[#1F2937]"></div>
                    <div class="w-9 h-9 rounded-full bg-[#050816] border border-white/10 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                      <svg class="w-4 h-4 text-slate-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div class="flex-1 h-px bg-[#1F2937]"></div>
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-3xl sm:text-4xl font-black text-white">{{ arrTime(flight) }}</p>
                  <p class="text-sm font-black text-slate-400">{{ flight.route?.destinationAirport?.iataCode ?? flight.destinationAirportIata }}</p>
                  <p class="text-xs text-slate-400">{{ flight.route?.destinationAirport?.city ?? '' }}</p>
                </div>
              </div>

              <div class="border-t border-white/10 pt-5 space-y-3">
                <div *ngFor="let fc of flight.flightClasses ?? []"
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl bg-[#050816] border border-white/10 px-4 py-3">
                  <div>
                    <span [class]="'text-xs font-black px-3 py-1 rounded-full ' + classColor(fc.classType)">
                      {{ classLabel(fc.classType) }}
                    </span>
                    <span class="text-xs text-slate-400 ml-2 font-semibold">{{ fc.availableSeats }} asientos</span>
                  </div>

                  <div class="flex items-center justify-between sm:justify-end gap-4">
                    <div class="text-right">
                      <p class="text-2xl font-black text-amber-500">\${{ (fc.basePrice * params().passengers).toFixed(2) }}</p>
                      <p *ngIf="params().passengers > 1" class="text-xs text-slate-400">\${{ fc.basePrice.toFixed(2) }} × {{ params().passengers }}</p>
                    </div>
                    <button (click)="reserve(fc.id)"
                      class="bg-amber-500 hover:bg-amber-400 text-white text-sm font-black px-5 py-3 rounded-2xl transition-colors whitespace-nowrap shadow-lg shadow-amber-500/20">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  `,
})
export class ResultsComponent implements OnInit {
  private route   = inject(ActivatedRoute);
  router  = inject(Router);
  private flightsSvc = inject(FlightsService);

  loading  = signal(false);
  error    = signal<string | null>(null);
  flights  = signal<Flight[]>([]);
  sortBy   = 'departure';

  params = signal<FlightSearchParams>({ origin: '', destination: '', date: '', passengers: 1 });

  formattedDate = computed(() => {
    const d = this.params().date;
    if (!d) return '';
    try { return format(new Date(d + 'T12:00:00'), "d 'de' MMMM, yyyy", { locale: es }); } catch { return d; }
  });

  sorted = computed(() => {
    const list = [...this.flights()];
    if (this.sortBy === 'price') {
      return list.sort((a, b) => {
        const aMin = Math.min(...(a.flightClasses ?? []).map(fc => fc.basePrice));
        const bMin = Math.min(...(b.flightClasses ?? []).map(fc => fc.basePrice));
        return aMin - bMin;
      });
    }
    if (this.sortBy === 'duration') {
      return list.sort((a, b) => (a.route?.estimatedDuration ?? a.duration ?? 0) - (b.route?.estimatedDuration ?? b.duration ?? 0));
    }
    return list.sort((a, b) =>
      new Date(a.departureDateTime ?? a.departureDate).getTime() - new Date(b.departureDateTime ?? b.departureDate).getTime()
    );
  });

  ngOnInit() {
    const q = this.route.snapshot.queryParams;
    this.params.set({
      origin:      q['origin'] ?? '',
      destination: q['destination'] ?? '',
      date:        q['date'] ?? '',
      passengers:  Number(q['passengers'] ?? 1),
      class:       q['class'] || undefined,
    });
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set(null);
    this.flightsSvc.search(this.params()).subscribe({
      next: res => { this.flights.set(res.data); this.loading.set(false); },
      error: err => {
        this.error.set(err?.error?.error?.message ?? 'Error al buscar vuelos.');
        this.loading.set(false);
      },
    });
  }

  reserve(flightClassId: string) {
    this.router.navigate(['/reservations/new', flightClassId]);
  }

  depTime(f: Flight) {
    const d = f.departureDateTime ? new Date(f.departureDateTime) : null;
    return d ? format(d, 'HH:mm') : '--:--';
  }
  arrTime(f: Flight) {
    const d = f.arrivalDateTime ? new Date(f.arrivalDateTime) : null;
    return d ? format(d, 'HH:mm') : '--:--';
  }
  durationStr(f: Flight) {
    const m = f.route?.estimatedDuration ?? f.duration;
    return m ? formatDuration(m) : '';
  }
  classColor(t: string) {
    if (t === 'FIRST') return 'bg-purple-100 text-purple-700';
    if (t === 'BUSINESS') return 'bg-amber-100 text-amber-700';
    return 'bg-[#1F2937] text-slate-200';
  }
  classLabel(t: string) {
    if (t === 'ECONOMY') return 'Económica';
    if (t === 'BUSINESS') return 'Business';
    if (t === 'FIRST') return 'Primera';
    return t;
  }
}


