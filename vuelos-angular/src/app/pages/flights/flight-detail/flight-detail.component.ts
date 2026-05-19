import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlightsService } from '../../../core/services/flights.service';
import type { Flight } from '../../../core/models/domain';
import { format } from 'date-fns';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#050816]">
      <section class="relative bg-slate-950 text-white overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(217,119,6,0.20),_transparent_32%)]"></div>

        <div class="relative max-w-5xl mx-auto px-4 py-10">
          <button (click)="router.navigate(['/results'])"
            class="inline-flex items-center gap-2 text-sm font-semibold text-amber-100 hover:text-white transition-colors mb-8">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M15 19l-7-7 7-7"/>
            </svg>
            Volver a resultados
          </button>

          <div *ngIf="loading()" class="flex justify-center py-20">
            <svg class="w-8 h-8 animate-spin text-amber-300" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </div>

          <ng-container *ngIf="!loading() && flight() as f">
            <p class="text-xs font-black text-amber-300 uppercase tracking-wider mb-2">Detalle del vuelo</p>
            <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
              {{ f.route?.originAirport?.iataCode ?? f.originAirportIata }}
              <span class="text-amber-300">→</span>
              {{ f.route?.destinationAirport?.iataCode ?? f.destinationAirportIata }}
            </h1>
            <p class="text-amber-100/80 mt-3">{{ f.airline?.name ?? 'Aerolínea' }} · {{ f.flightNumber ?? 'Vuelo disponible' }}</p>
          </ng-container>
        </div>
      </section>

      <main class="max-w-5xl mx-auto px-4 py-8">
        <div *ngIf="!loading() && flight() as f" class="space-y-6">
          <section class="bg-[#0B1020] rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.06)] p-6 sm:p-8">
            <div class="grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8">
              <div>
                <p class="text-4xl font-black text-white">{{ depTime(f) }}</p>
                <p class="text-sm font-black text-slate-400">{{ f.route?.originAirport?.iataCode ?? f.originAirportIata }}</p>
                <p class="text-xs text-slate-400">{{ f.route?.originAirport?.city ?? '' }}</p>
              </div>

              <div class="flex flex-col items-center gap-2">
                <div class="w-full flex items-center gap-2">
                  <div class="flex-1 h-px bg-[#1F2937]"></div>
                  <div class="w-11 h-11 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">
                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/>
                    </svg>
                  </div>
                  <div class="flex-1 h-px bg-[#1F2937]"></div>
                </div>
                <p class="text-xs font-semibold text-slate-400">Ruta seleccionada</p>
              </div>

              <div class="text-right">
                <p class="text-4xl font-black text-white">{{ arrTime(f) }}</p>
                <p class="text-sm font-black text-slate-400">{{ f.route?.destinationAirport?.iataCode ?? f.destinationAirportIata }}</p>
                <p class="text-xs text-slate-400">{{ f.route?.destinationAirport?.city ?? '' }}</p>
              </div>
            </div>
          </section>

          <section class="bg-[#0B1020] rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.06)] p-6 sm:p-8">
            <div class="flex items-end justify-between gap-4 mb-5">
              <div>
                <p class="text-xs font-black text-amber-500 uppercase tracking-wider mb-1">Tarifas premium disponibles</p>
                <h2 class="text-2xl font-black text-white">Selecciona tu experiencia</h2>
              </div>
            </div>

            <div class="space-y-3">
              <div *ngFor="let fc of f.flightClasses ?? []"
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl bg-[#050816] border border-white/10 p-5">
                <div>
                  <span [class]="'inline-flex text-xs font-black px-3 py-1 rounded-full mb-2 ' + classColor(fc.classType)">
                    {{ classLabel(fc.classType) }}
                  </span>
                  <p class="text-sm font-semibold text-slate-400">{{ fc.availableSeats }} asientos disponibles</p>
                </div>

                <div class="flex items-center justify-between sm:justify-end gap-5">
                  <div class="text-right">
                    <p class="text-3xl font-black text-amber-500">\${{ fc.basePrice.toFixed(2) }}</p>
                    <p class="text-xs text-slate-400">por pasajero</p>
                  </div>
                  <button (click)="router.navigate(['/reservations/new', fc.id])"
                    class="bg-amber-500 hover:bg-amber-400 text-white text-sm font-black px-6 py-3 rounded-2xl transition-colors shadow-lg shadow-amber-500/20">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  `,
})
export class FlightDetailComponent implements OnInit {
  route  = inject(ActivatedRoute);
  router = inject(Router);
  private flightsSvc = inject(FlightsService);

  loading = signal(true);
  flight  = signal<Flight | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.flightsSvc.getById(id).subscribe({
      next: res => { this.flight.set(res.data); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  depTime(f: Flight) {
    return f.departureDateTime ? format(new Date(f.departureDateTime), 'HH:mm') : '--:--';
  }
  arrTime(f: Flight) {
    return f.arrivalDateTime ? format(new Date(f.arrivalDateTime), 'HH:mm') : '--:--';
  }
  classColor(t: string) {
    if (t === 'FIRST') return 'bg-purple-100 text-purple-700';
    if (t === 'BUSINESS') return 'bg-amber-100 text-amber-700';
    return 'bg-[#1F2937] text-slate-200';
  }
  classLabel(t: string) {
    if (t === 'ECONOMY') return 'Económica';
    if (t === 'BUSINESS') return 'Business';
    if (t === 'FIRST') return 'Primera clase';
    return t;
  }
}


