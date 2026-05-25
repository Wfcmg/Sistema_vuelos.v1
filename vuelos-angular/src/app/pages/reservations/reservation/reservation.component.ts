import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ReservationsService } from '../../../core/services/reservations.service';
import { PaymentsService } from '../../../core/services/payments.service';
import { PromotionsService } from '../../../core/services/promotions.service';
import { InvoicesService } from '../../../core/services/invoices.service';
import { AuthStore } from '../../../core/store/auth.store';
import type { PromotionValidation, Invoice } from '../../../core/models/domain';

const CARD_PROVIDERS = [
  { value: 'VISA', label: 'Visa' },
  { value: 'MASTERCARD', label: 'Mastercard' },
  { value: 'AMEX', label: 'American Express' },
  { value: 'PAYPAL', label: 'PayPal' },
];

const SEAT_ROWS = [1, 2, 3, 4, 5, 6, 12, 14, 15, 16, 17, 18, 19, 20];
const SEAT_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
const SEAT_OPTIONS = SEAT_ROWS.flatMap(row => SEAT_LETTERS.map(letter => `${row}${letter}`));

function generateTxId() {
  return `TXN-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

type TicketPassenger = {
  firstName: string;
  lastName: string;
  documentNumber: string;
  seatNumber: string;
};

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto px-4 py-8">

      <!-- Ticket / pantalla final -->
      <ng-container *ngIf="successData() as sd">
        <div class="flex flex-col items-center text-center py-10 space-y-6">
          <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <div>
            <h1 class="text-2xl font-bold text-white">¡Pago exitoso!</h1>
            <p class="text-sm text-slate-400 mt-1">Tu reserva fue confirmada y el ticket se generó automáticamente</p>
          </div>

          <div class="w-full bg-[#0B1020] border border-white/10 rounded-2xl overflow-hidden text-left shadow-[0_0_45px_rgba(245,158,11,0.10)]">
            <div class="bg-[#050816] px-6 py-5 border-b border-white/10">
              <p class="text-xs uppercase tracking-[0.25em] text-amber-500 font-black">Ticket AeroWilly</p>
              <h2 class="text-xl font-black text-white mt-1">Boarding Ticket / Reserva</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div class="p-6 space-y-4">
                <div>
                  <p class="text-xs text-slate-500 uppercase font-bold">Código de reserva</p>
                  <p class="font-mono text-amber-500 text-lg font-black">{{ sd.reservationCode }}</p>
                </div>

                <div>
                  <p class="text-xs text-slate-500 uppercase font-bold">Usuario</p>
                  <p class="text-slate-100 font-semibold">
                    {{ auth.user()?.firstName }} {{ auth.user()?.firstLastName }}
                  </p>
                  <p class="text-xs text-slate-500">{{ auth.user()?.email }}</p>
                </div>

                <div>
                  <p class="text-xs text-slate-500 uppercase font-bold">Datos del vuelo</p>
                  <p class="text-slate-200 text-sm">Clase de vuelo: <span class="font-mono text-amber-500">{{ sd.flightClassId }}</span></p>
                  <p class="text-xs text-slate-500">El detalle completo queda disponible en “Mis viajes”.</p>
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <p class="text-xs text-slate-500 uppercase font-bold mb-2">Pasajeros y asientos</p>
                  <div class="space-y-2">
                    <div *ngFor="let p of sd.passengers" class="flex items-center justify-between bg-[#050816] border border-white/10 rounded-xl px-4 py-3">
                      <div>
                        <p class="text-sm font-bold text-white">{{ p.firstName }} {{ p.lastName }}</p>
                        <p class="text-xs text-slate-500">Doc: {{ p.documentNumber }}</p>
                      </div>
                      <div class="text-right">
                        <p class="font-mono text-lg font-black text-amber-500">{{ p.seatNumber }}</p>
                        <p class="text-[11px] text-slate-500">{{ seatLabel(p.seatNumber) }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ng-container *ngIf="sd.invoice as inv">
                  <div class="pt-3 border-t border-white/10 space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-slate-400">N° Factura</span>
                      <span class="font-mono text-slate-100">{{ inv.invoiceNumber }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-slate-400">Subtotal</span>
                      <span class="text-slate-200">{{ money(inv.subtotal) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-slate-400">IVA 15%</span>
                      <span class="text-slate-200">{{ money(inv.taxAmount) }}</span>
                    </div>
                    <div class="flex justify-between font-black text-base pt-2 border-t border-white/10">
                      <span class="text-white">Total pagado</span>
                      <span class="text-amber-500">{{ money(inv.total) }}</span>
                    </div>
                  </div>
                </ng-container>

                <div *ngIf="!sd.invoice" class="pt-3 border-t border-white/10 flex justify-between">
                  <span class="font-semibold text-slate-100">Total pagado</span>
                  <span class="text-xl font-black text-amber-500">{{ money(sd.totalAmount) }}</span>
                </div>
              </div>
            </div>
          </div>

          <button (click)="router.navigate(['/my-trips', sd.reservationId])"
            class="w-full max-w-md bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-xl transition-colors">
            Ver mi reserva
          </button>
        </div>
      </ng-container>

      <ng-container *ngIf="!successData()">
        <button (click)="goBack()" class="text-sm text-amber-500 hover:underline mb-6 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M15 19l-7-7 7-7"/>
          </svg>
          {{ backLabel() }}
        </button>

        <!-- Steps -->
        <div class="flex items-center gap-3 mb-8">
          <ng-container *ngFor="let s of steps; let i = index">
            <div class="flex items-center gap-2 flex-1">
              <div [class]="'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ' + stepClass(s.n)">
                <svg *ngIf="step() > s.n" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span *ngIf="step() <= s.n">{{ s.n }}</span>
              </div>
              <span [class]="'text-sm font-medium ' + (step() === s.n ? 'text-amber-500' : 'text-slate-500')">{{ s.label }}</span>
              <div *ngIf="i < steps.length - 1" [class]="'flex-1 h-0.5 mx-2 ' + (step() > s.n ? 'bg-green-400' : 'bg-[#1F2937]')"></div>
            </div>
          </ng-container>
        </div>

        <h1 class="text-2xl font-bold text-white mb-2">{{ pageTitle() }}</h1>
        <p class="text-sm text-slate-400 mb-8">{{ pageSubtitle() }}</p>

        <div *ngIf="errorMsg()" class="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-sm text-red-700">{{ errorMsg() }}</p>
        </div>

        <!-- Step 1: Pasajeros -->
        <form *ngIf="step() === 1" [formGroup]="passengerForm" (ngSubmit)="nextStep()" class="space-y-6">
          <section>
            <div class="flex items-center justify-between mb-3">
              <h2 class="font-semibold text-slate-100">Pasajeros</h2>
              <button type="button" (click)="addPassenger()" class="text-xs text-amber-500 hover:text-amber-600 flex items-center gap-1 font-medium">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 4v16m8-8H4"/>
                </svg>
                Añadir pasajero
              </button>
            </div>

            <div formArrayName="passengers" class="space-y-4">
              <div *ngFor="let pg of passengerArray.controls; let i = index" [formGroupName]="i"
                class="bg-[#050816] rounded-xl p-5 border border-white/10">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold text-slate-100 flex items-center gap-2 text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Pasajero {{ i + 1 }}
                  </h3>
                  <button *ngIf="passengerArray.length > 1" type="button" (click)="removePassenger(i)" class="text-red-400 hover:text-red-600">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-medium text-slate-400 mb-1">Nombre</label>
                    <input formControlName="firstName" placeholder="Juan"
                      class="w-full bg-[#0B1020] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-slate-400 mb-1">Apellido</label>
                    <input formControlName="lastName" placeholder="Pérez"
                      class="w-full bg-[#0B1020] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                  <div class="sm:col-span-2">
                    <label class="block text-xs font-medium text-slate-400 mb-1">N° documento</label>
                    <input formControlName="documentNumber" placeholder="A1234567"
                      class="w-full bg-[#0B1020] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Promo -->
          <section class="bg-[#0B1020] rounded-xl border border-white/10 p-5">
            <h2 class="font-semibold text-slate-100 mb-3 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
              ¿Tienes un código de descuento?
            </h2>
            <div class="flex gap-2">
              <input [(ngModel)]="promoCode" [ngModelOptions]="{standalone: true}" placeholder="Ej: VERANO25"
                class="flex-1 bg-[#050816] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none uppercase" />
              <button type="button" (click)="validatePromo()" [disabled]="promoLoading() || !promoCode"
                class="px-4 py-2 bg-[#111827] hover:bg-[#1F2937] text-slate-200 text-sm font-medium rounded-lg transition-colors disabled:opacity-50">
                <svg *ngIf="promoLoading()" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                <span *ngIf="!promoLoading()">Aplicar</span>
              </button>
            </div>
            <div *ngIf="promoResult()" class="mt-3 flex items-center gap-2 text-green-700 text-sm bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              Código <strong>{{ promoResult()!.code }}</strong> — Ahorro: {{ money(promoResult()!.discountAmount) }}
            </div>
            <p *ngIf="promoError()" class="mt-2 text-xs text-red-500">{{ promoError() }}</p>
          </section>

          <button type="submit"
            class="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-xl transition-colors">
            Continuar a selección de asientos
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </form>

        <!-- Step 2: Selección de asientos -->
        <section *ngIf="step() === 2" class="space-y-6">
          <div class="bg-[#0B1020] border border-white/10 rounded-2xl p-5">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
              <div>
                <h2 class="text-lg font-black text-white">Selecciona tus asientos</h2>
                <p class="text-sm text-slate-400 mt-1">
                  Los asientos rojos ya están ocupados. Antes de pagar se vuelve a validar con el backend.
                </p>
              </div>
              <button type="button" (click)="reloadSeats()"
                class="px-4 py-2 rounded-xl bg-[#050816] border border-white/10 text-xs font-bold text-amber-500 hover:bg-[#111827]">
                Refrescar ocupados
              </button>
            </div>

            <div *ngIf="occupiedSeatsLoading()" class="mb-4 flex items-center gap-2 text-xs text-slate-400">
              <svg class="w-4 h-4 animate-spin text-amber-500" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Consultando asientos ocupados...
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-6">
              <!-- Avión -->
              <div class="relative mx-auto w-full max-w-[38rem] px-5 sm:px-12">
                <!-- Nariz / frente -->
                <div class="relative mx-12 h-24 rounded-t-[120px] border-x border-t border-amber-200/30 bg-gradient-to-b from-sky-100 via-white to-[#0B1020] shadow-[0_0_35px_rgba(245,158,11,0.10)]">
                  <div class="absolute left-1/2 top-5 grid -translate-x-1/2 grid-cols-2 gap-2">
                    <span class="block h-5 w-10 rounded-t-full bg-blue-200/80 border border-blue-300"></span>
                    <span class="block h-5 w-10 rounded-t-full bg-blue-200/80 border border-blue-300"></span>
                  </div>
                  <span class="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wide text-amber-500">
                    Frente del avión
                  </span>
                </div>

                <div class="relative">
                  <!-- Alas -->
                  <div class="hidden sm:flex absolute -left-12 top-[18rem] h-64 w-24 rounded-l-[90%] bg-gradient-to-r from-sky-200 to-sky-50 border border-amber-100 items-center justify-center">
                    <span class="-rotate-90 text-[11px] font-black tracking-wider text-sky-700">ALA IZQ.</span>
                  </div>
                  <div class="hidden sm:flex absolute -right-12 top-[18rem] h-64 w-24 rounded-r-[90%] bg-gradient-to-l from-sky-200 to-sky-50 border border-amber-100 items-center justify-center">
                    <span class="rotate-90 text-[11px] font-black tracking-wider text-sky-700">ALA DER.</span>
                  </div>

                  <!-- Puertas -->
                  <span class="hidden sm:flex absolute -left-12 top-[25rem] -rotate-90 rounded-full bg-orange-50 px-2 py-1 text-[10px] font-black tracking-wider text-orange-600 border border-orange-200">
                    PUERTA / EXIT
                  </span>
                  <span class="hidden sm:flex absolute -right-12 top-[25rem] rotate-90 rounded-full bg-orange-50 px-2 py-1 text-[10px] font-black tracking-wider text-orange-600 border border-orange-200">
                    PUERTA / EXIT
                  </span>

                  <div class="relative mx-auto rounded-b-[64px] border-x border-b border-amber-200/30 bg-[#050816] px-4 pb-7 pt-4 shadow-inner">
                    <div class="mb-3 grid grid-cols-[1fr_2.5rem_1fr] items-center gap-2 text-center">
                      <span class="rounded-lg border border-white/10 bg-[#0B1020] py-1 text-[10px] font-bold text-slate-400">WC</span>
                      <span class="text-[10px] font-bold uppercase text-gray-400">Pasillo</span>
                      <span class="rounded-lg border border-white/10 bg-[#0B1020] py-1 text-[10px] font-bold text-slate-400">WC</span>
                    </div>

                    <div class="mb-3 grid grid-cols-[1fr_2.5rem_1fr] gap-2 text-center">
                      <div class="grid grid-cols-3 gap-1 text-[10px] font-bold text-slate-500">
                        <span *ngFor="let letter of leftSeatLetters">{{ letter }}</span>
                      </div>
                      <span class="text-[10px] font-bold text-gray-400">Fila</span>
                      <div class="grid grid-cols-3 gap-1 text-[10px] font-bold text-slate-500">
                        <span *ngFor="let letter of rightSeatLetters">{{ letter }}</span>
                      </div>
                    </div>

                    <div class="space-y-1">
                      <ng-container *ngFor="let row of seatRows">
                        <div *ngIf="isExitRow(row)" class="grid grid-cols-[1fr_2.5rem_1fr] items-center gap-2 py-1 text-center">
                          <span class="h-px bg-orange-200"></span>
                          <span class="rounded-full bg-orange-50 px-2 py-1 text-[9px] font-black text-orange-600 border border-orange-200">EXIT</span>
                          <span class="h-px bg-orange-200"></span>
                        </div>

                        <div class="grid grid-cols-[1fr_2.5rem_1fr] items-center gap-2 text-center">
                          <div class="relative grid grid-cols-3 gap-1">
                            <button *ngFor="let letter of leftSeatLetters" type="button"
                              (click)="selectSeatForActivePassenger(row + letter)"
                              [disabled]="isSeatUnavailableForActivePassenger(row + letter)"
                              [title]="seatTooltip(row + letter)"
                              [class]="seatButtonClass(row + letter)">
                              <span class="block h-1 w-5 rounded-full bg-current opacity-30 mb-0.5"></span>
                              <span>{{ row }}{{ letter }}</span>
                            </button>
                          </div>

                          <span [class]="rowMarkerClass(row)">{{ row }}</span>

                          <div class="relative grid grid-cols-3 gap-1">
                            <button *ngFor="let letter of rightSeatLetters" type="button"
                              (click)="selectSeatForActivePassenger(row + letter)"
                              [disabled]="isSeatUnavailableForActivePassenger(row + letter)"
                              [title]="seatTooltip(row + letter)"
                              [class]="seatButtonClass(row + letter)">
                              <span class="block h-1 w-5 rounded-full bg-current opacity-30 mb-0.5"></span>
                              <span>{{ row }}{{ letter }}</span>
                            </button>
                          </div>
                        </div>
                      </ng-container>
                    </div>

                    <div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-semibold text-slate-400">
                      <span class="flex items-center justify-center gap-1"><i class="h-2.5 w-2.5 rounded bg-[#0B1020] border border-white/15"></i>Libre</span>
                      <span class="flex items-center justify-center gap-1"><i class="h-2.5 w-2.5 rounded bg-blue-100 border border-blue-300"></i>Ejecutiva</span>
                      <span class="flex items-center justify-center gap-1"><i class="h-2.5 w-2.5 rounded bg-amber-500"></i>Elegido</span>
                      <span class="flex items-center justify-center gap-1"><i class="h-2.5 w-2.5 rounded bg-red-100 border border-red-300"></i>Ocupado</span>
                    </div>

                    <div class="mt-3 grid grid-cols-[1fr_2.5rem_1fr] items-center gap-2 text-center">
                      <span class="rounded-lg border border-white/10 bg-[#0B1020] py-1 text-[10px] font-bold text-slate-400">WC</span>
                      <span class="text-[10px] font-bold uppercase text-gray-400">Cola</span>
                      <span class="rounded-lg border border-white/10 bg-[#0B1020] py-1 text-[10px] font-bold text-slate-400">WC</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pasajeros / selección -->
              <div class="space-y-3">
                <div class="bg-[#050816] border border-white/10 rounded-2xl p-4">
                  <p class="text-xs uppercase tracking-wide text-slate-500 font-black mb-3">Pasajeros</p>

                  <div class="space-y-2">
                    <button *ngFor="let pg of passengerArray.controls; let i = index" type="button"
                      (click)="activePassengerIndex.set(i)"
                      [class]="passengerSeatCardClass(i)">
                      <div class="text-left min-w-0">
                        <p class="text-sm font-bold truncate">{{ passengerName(i) }}</p>
                        <p class="text-xs opacity-75 truncate">Doc: {{ passengerDocument(i) }}</p>
                      </div>
                      <div class="text-right">
                        <p class="font-mono text-lg font-black">{{ selectedSeat(i) || '—' }}</p>
                        <p class="text-[10px] opacity-75">{{ selectedSeat(i) ? seatLabel(selectedSeat(i)) : 'Sin asiento' }}</p>
                      </div>
                    </button>
                  </div>

                  <button type="button" (click)="autoAssignAllSeats()"
                    class="mt-3 w-full bg-[#111827] hover:bg-[#1F2937] text-slate-200 text-xs font-bold py-2 rounded-xl">
                    Asignar automáticamente
                  </button>
                </div>

                <div class="bg-[#050816] border border-white/10 rounded-2xl p-4 space-y-2">
                  <p class="text-xs uppercase tracking-wide text-slate-500 font-black">Asiento seleccionado</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-slate-300">
                      {{ selectedSeat(activePassengerIndex()) || 'Selecciona un asiento del avión' }}
                    </span>
                    <span class="font-black text-amber-500">
                      {{ selectedSeat(activePassengerIndex()) ? seatLabel(selectedSeat(activePassengerIndex())) : '' }}
                    </span>
                  </div>
                </div>

                <button type="button" (click)="goToPayment()"
                  class="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-xl transition-colors">
                  Continuar al pago
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Step 3: Pago -->
        <form *ngIf="step() === 3" [formGroup]="payForm" (ngSubmit)="submitPayment()" class="space-y-6">
          <div class="bg-[#0B1020] border border-white/10 rounded-xl p-4">
            <p class="text-sm font-semibold text-slate-100 mb-3">Resumen de la reserva</p>
            <div class="space-y-2">
              <div *ngFor="let p of passengerArray.value; let i = index" class="flex items-center justify-between gap-2 text-sm bg-[#050816] border border-white/10 rounded-lg px-3 py-2">
                <div class="text-slate-300">
                  <span>{{ p.firstName }} {{ p.lastName }}</span>
                  <span class="text-slate-500"> — {{ p.documentNumber }}</span>
                </div>
                <span class="font-mono font-black text-amber-500">{{ p.seatNumber }}</span>
              </div>

              <div *ngIf="promoResult()" class="flex items-center gap-2 text-sm text-green-600 mt-2 pt-2 border-t border-white/10">
                <span>Descuento <strong>{{ promoResult()!.code }}</strong>: -{{ money(promoResult()!.discountAmount) }}</span>
              </div>
            </div>
          </div>

          <section class="bg-[#0B1020] rounded-xl border border-white/10 p-5 space-y-4">
            <h2 class="font-semibold text-slate-100 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
              </svg>
              Método de pago
            </h2>

            <div>
              <label class="block text-xs font-medium text-slate-400 mb-2">Tipo de tarjeta</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <label *ngFor="let p of cardProviders" class="cursor-pointer">
                  <input type="radio" formControlName="provider" [value]="p.value" class="sr-only peer" />
                  <div class="border-2 border-white/10 peer-checked:border-amber-500 peer-checked:bg-amber-50 rounded-lg px-3 py-2 text-center text-xs font-semibold text-slate-300 peer-checked:text-amber-600 transition-colors">
                    {{ p.label }}
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-400 mb-1">Nombre en la tarjeta</label>
              <input formControlName="cardholderName" placeholder="JUAN PÉREZ"
                class="w-full bg-[#050816] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none uppercase" />
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-400 mb-1">Número de tarjeta</label>
              <input formControlName="cardNumber" placeholder="1234 5678 9012 3456"
                [value]="cardDisplay" (input)="onCardInput($event)"
                class="w-full bg-[#050816] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1">Vencimiento</label>
                <input formControlName="expiry" placeholder="MM/AA" maxlength="5" (input)="onExpiryInput($event)"
                  class="w-full bg-[#050816] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1">CVV</label>
                <input formControlName="cvv" type="password" placeholder="123" maxlength="4"
                  class="w-full bg-[#050816] text-slate-100 border border-white/15 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
            </div>
          </section>

          <button type="submit" [disabled]="payLoading()"
            class="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md">
            <svg *ngIf="payLoading()" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ payLoading() ? 'Procesando pago...' : 'Confirmar y pagar' }}
          </button>
        </form>
      </ng-container>
    </div>
  `,
})
export class ReservationComponent implements OnInit {
  private route      = inject(ActivatedRoute);
  router             = inject(Router);
  private fb         = inject(FormBuilder);
  private resSvc     = inject(ReservationsService);
  private paymentSvc = inject(PaymentsService);
  private promoSvc   = inject(PromotionsService);
  private invoiceSvc = inject(InvoicesService);
  auth               = inject(AuthStore);

  step           = signal<1 | 2 | 3>(1);
  errorMsg       = signal<string | null>(null);
  payLoading     = signal(false);
  promoLoading   = signal(false);
  promoError     = signal<string | null>(null);
  promoResult    = signal<PromotionValidation | null>(null);
  occupiedSeats  = signal<Set<string>>(new Set());
  occupiedSeatsLoading = signal(false);
  activePassengerIndex = signal(0);

  successData = signal<{
    reservationId: string;
    reservationCode: string;
    invoice: Invoice | null;
    passengers: TicketPassenger[];
    flightClassId: string;
    totalAmount: number;
  } | null>(null);

  promoCode      = '';
  cardDisplay    = '';
  cardProviders  = CARD_PROVIDERS;

  steps = [
    { n: 1, label: 'Pasajeros' },
    { n: 2, label: 'Asientos' },
    { n: 3, label: 'Pago' },
  ];

  flightClassId = '';

  seatRows = SEAT_ROWS;
  leftSeatLetters = SEAT_LETTERS.slice(0, 3);
  rightSeatLetters = SEAT_LETTERS.slice(3);

  passengerForm = this.fb.group({
    passengers: this.fb.array([this.createPassengerGroup()]),
  });

  payForm = this.fb.group({
    provider:       ['VISA', Validators.required],
    cardholderName: ['', Validators.required],
    cardNumber:     ['', [Validators.required, Validators.pattern(/^[\d\s]{19}$/)]],
    expiry:         ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
    cvv:            ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
  });

  get passengerArray() {
    return this.passengerForm.get('passengers') as FormArray;
  }

  createPassengerGroup() {
    return this.fb.group({
      firstName:      ['', Validators.required],
      lastName:       ['', Validators.required],
      documentNumber: ['', Validators.required],
      seatNumber:     [''],
    });
  }

  ngOnInit() {
    this.flightClassId = this.route.snapshot.paramMap.get('flightClassId') ?? '';
    this.loadOccupiedSeats();
  }

  money(value: unknown) {
    return `$${Number(value ?? 0).toFixed(2)}`;
  }

  addPassenger() {
    this.passengerArray.push(this.createPassengerGroup());
  }

  removePassenger(i: number) {
    this.passengerArray.removeAt(i);
    if (this.activePassengerIndex() >= this.passengerArray.length) {
      this.activePassengerIndex.set(Math.max(0, this.passengerArray.length - 1));
    }
  }

  stepClass(n: number) {
    if (this.step() === n) return 'bg-amber-500 text-white';
    if (this.step() > n)  return 'bg-green-500 text-white';
    return 'bg-[#1F2937] text-slate-400';
  }

  backLabel() {
    if (this.step() === 3) return 'Volver a selección de asientos';
    if (this.step() === 2) return 'Volver a datos de pasajeros';
    return 'Volver';
  }

  pageTitle() {
    if (this.step() === 1) return 'Datos de pasajeros';
    if (this.step() === 2) return 'Selección de asientos';
    return 'Información de pago';
  }

  pageSubtitle() {
    if (this.step() === 1) return 'Ingresa los datos de todos los pasajeros';
    if (this.step() === 2) return 'Elige un asiento disponible para cada pasajero';
    return 'Ingresa los datos de tu tarjeta y confirma la reserva';
  }

  goBack() {
    if (this.step() === 3) {
      this.step.set(2);
      return;
    }
    if (this.step() === 2) {
      this.step.set(1);
      return;
    }
    this.router.navigate(['/results']);
  }

  nextStep() {
    if (this.passengerForm.invalid) {
      this.passengerForm.markAllAsTouched();
      return;
    }

    this.errorMsg.set(null);
    this.activePassengerIndex.set(0);
    this.loadOccupiedSeats();
    this.step.set(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToPayment() {
    this.errorMsg.set(null);
    this.loadOccupiedSeats();

    const missing = this.passengerArray.value.some((p: any) => !p.seatNumber);
    if (missing) {
      this.errorMsg.set('Selecciona un asiento para cada pasajero antes de continuar.');
      return;
    }

    const selectedSeats = this.passengerArray.value.map((p: any) => String(p.seatNumber).toUpperCase());
    const duplicated = selectedSeats.find((seat: string, index: number) => selectedSeats.indexOf(seat) !== index);
    if (duplicated) {
      this.errorMsg.set(`El asiento ${duplicated} está repetido. Elige asientos diferentes.`);
      return;
    }

    const occupiedConflict = selectedSeats.find((seat: string) => this.occupiedSeats().has(seat));
    if (occupiedConflict) {
      this.errorMsg.set(`El asiento ${occupiedConflict} ya está ocupado. Refresca y elige otro.`);
      return;
    }

    this.step.set(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  validatePromo() {
    if (!this.promoCode) return;

    this.promoLoading.set(true);
    this.promoError.set(null);

    const base = 100 * this.passengerArray.length;

    this.promoSvc.validate(this.promoCode, base).subscribe({
      next: res => {
        this.promoResult.set(res.data);
        this.promoLoading.set(false);
      },
      error: err => {
        this.promoError.set(err?.error?.error?.message ?? 'Código inválido');
        this.promoResult.set(null);
        this.promoLoading.set(false);
      },
    });
  }

  onCardInput(e: Event) {
    const inp = e.target as HTMLInputElement;
    const fmt = inp.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    this.cardDisplay = fmt;
    this.payForm.get('cardNumber')!.setValue(fmt);
  }

  onExpiryInput(e: Event) {
    const inp = e.target as HTMLInputElement;
    let v = inp.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
    inp.value = v;
    this.payForm.get('expiry')!.setValue(v);
  }

  loadOccupiedSeats() {
    if (!this.flightClassId) return;

    this.occupiedSeatsLoading.set(true);

    this.resSvc.occupiedSeats(this.flightClassId).subscribe({
      next: res => {
        const seats = (res.data ?? []).map(seat => String(seat).toUpperCase());
        this.occupiedSeats.set(new Set(seats));
        this.occupiedSeatsLoading.set(false);
      },
      error: () => {
        this.occupiedSeats.set(new Set());
        this.occupiedSeatsLoading.set(false);
      },
    });
  }

  reloadSeats() {
    this.loadOccupiedSeats();
  }

  passengerName(i: number) {
    const p = this.passengerArray.at(i)?.value as any;
    return `${p?.firstName ?? ''} ${p?.lastName ?? ''}`.trim() || `Pasajero ${i + 1}`;
  }

  passengerDocument(i: number) {
    const p = this.passengerArray.at(i)?.value as any;
    return p?.documentNumber || 'Sin documento';
  }

  selectedSeat(i: number) {
    const p = this.passengerArray.at(i)?.value as any;
    return p?.seatNumber ? String(p.seatNumber).toUpperCase() : '';
  }

  private setPassengerSeat(i: number, seat: string) {
    this.passengerArray.at(i).get('seatNumber')?.setValue(seat.toUpperCase());
    this.passengerArray.at(i).get('seatNumber')?.markAsTouched();
  }

  selectedSeatsExcept(index: number) {
    return this.passengerArray.value
      .map((p: any, i: number) => i === index ? '' : String(p.seatNumber ?? '').toUpperCase())
      .filter(Boolean);
  }

  isSeatSelectedByOtherPassenger(index: number, seat: string) {
    return this.selectedSeatsExcept(index).includes(seat.toUpperCase());
  }

  isSeatUnavailableForActivePassenger(seat: string) {
    const i = this.activePassengerIndex();
    const normalized = seat.toUpperCase();
    const selectedByThis = this.selectedSeat(i) === normalized;
    if (selectedByThis) return false;
    return this.occupiedSeats().has(normalized) || this.isSeatSelectedByOtherPassenger(i, normalized);
  }

  selectSeatForActivePassenger(seat: string) {
    const i = this.activePassengerIndex();
    const normalized = seat.toUpperCase();

    if (this.isSeatUnavailableForActivePassenger(normalized)) {
      this.errorMsg.set(`El asiento ${normalized} no está disponible.`);
      return;
    }

    this.errorMsg.set(null);
    this.setPassengerSeat(i, normalized);
  }

  autoAssignAllSeats() {
    const used = new Set([...this.occupiedSeats()]);
    this.passengerArray.controls.forEach((_, i) => {
      const current = this.selectedSeat(i);
      if (current) used.add(current);
    });

    this.passengerArray.controls.forEach((_, i) => {
      if (this.selectedSeat(i)) return;

      const freeSeat = SEAT_OPTIONS.find(seat => !used.has(seat));
      if (freeSeat) {
        this.setPassengerSeat(i, freeSeat);
        used.add(freeSeat);
      }
    });
  }

  seatTooltip(seat: string) {
    const normalized = seat.toUpperCase();
    if (this.occupiedSeats().has(normalized)) return 'Asiento ocupado por otra reserva';
    if (this.isSeatSelectedByOtherPassenger(this.activePassengerIndex(), normalized)) return 'Asiento elegido por otro pasajero de esta reserva';
    return `${seat} - ${this.seatLabel(seat)}`;
  }

  seatLabel(seat?: string | null) {
    if (!seat) return '';
    const row = Number.parseInt(seat, 10);
    const letter = seat.slice(-1).toUpperCase();

    if (row <= 2) return 'Ejecutiva';
    if (row === 12) return 'Salida de emergencia';
    if (letter === 'A' || letter === 'F') return 'Económica · Ventana';
    if (letter === 'C' || letter === 'D') return 'Económica · Pasillo';
    return 'Económica';
  }

  seatButtonClass(seat: string) {
    const active = this.activePassengerIndex();
    const selectedByActive = this.selectedSeat(active) === seat.toUpperCase();
    const selectedByOther = this.isSeatSelectedByOtherPassenger(active, seat);
    const occupied = this.occupiedSeats().has(seat.toUpperCase());
    const row = Number.parseInt(seat, 10);

    const base = 'h-10 rounded-lg text-[10px] font-bold transition-colors border flex flex-col items-center justify-center leading-none';

    if (occupied) return `${base} bg-red-100 text-red-700 border-red-300 cursor-not-allowed opacity-90`;
    if (selectedByOther) return `${base} bg-purple-100 text-purple-700 border-purple-300 cursor-not-allowed opacity-90`;
    if (selectedByActive) return `${base} bg-amber-500 text-white border-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.25)]`;
    if (row <= 2) return `${base} bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200`;
    if (row === 12) return `${base} bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100`;
    return `${base} bg-[#0B1020] text-slate-200 border-white/10 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200`;
  }

  rowMarkerClass(row: number) {
    const base = 'h-10 flex items-center justify-center rounded-lg text-[10px] font-bold';
    if (this.isExitRow(row)) return `${base} bg-orange-50 text-orange-700 border border-orange-200`;
    return `${base} text-slate-500`;
  }

  isExitRow(row: number) {
    return row === 12;
  }

  passengerSeatCardClass(i: number) {
    const active = this.activePassengerIndex() === i;
    const hasSeat = !!this.selectedSeat(i);
    const base = 'w-full flex items-center justify-between gap-3 rounded-xl border px-3 py-3 transition-colors text-left';

    if (active) return `${base} bg-amber-500 text-white border-amber-300`;
    if (hasSeat) return `${base} bg-green-50 text-green-800 border-green-200`;
    return `${base} bg-[#0B1020] text-slate-300 border-white/10 hover:border-amber-300`;
  }

  submitPayment() {
    if (this.payForm.invalid) {
      this.payForm.markAllAsTouched();
      return;
    }

    const passengers: TicketPassenger[] = this.passengerArray.value.map((p: any) => ({
      firstName: String(p.firstName).trim(),
      lastName: String(p.lastName).trim(),
      documentNumber: String(p.documentNumber).trim(),
      seatNumber: String(p.seatNumber).trim().toUpperCase(),
    }));

    if (passengers.some(p => !p.seatNumber)) {
      this.errorMsg.set('Todos los pasajeros deben tener asiento.');
      this.step.set(2);
      return;
    }

    this.payLoading.set(true);
    this.errorMsg.set(null);

    this.resSvc.occupiedSeats(this.flightClassId).subscribe({
      next: seatRes => {
        const occupiedNow = new Set((seatRes.data ?? []).map(seat => String(seat).toUpperCase()));
        const conflict = passengers.find(p => occupiedNow.has(p.seatNumber));

        if (conflict) {
          this.occupiedSeats.set(occupiedNow);
          this.payLoading.set(false);
          this.step.set(2);
          this.errorMsg.set(`El asiento ${conflict.seatNumber} acaba de ocuparse. Elige otro asiento.`);
          return;
        }

        this.createReservationAndPayment(passengers);
      },
      error: () => {
        this.createReservationAndPayment(passengers);
      },
    });
  }

  private createReservationAndPayment(passengers: TicketPassenger[]) {
    const promo = this.promoResult();

    const userId = this.auth.user()?.id;

    if (!userId) {
      this.errorMsg.set('No se encontró el usuario conectado. Cierra sesión e inicia sesión nuevamente.');
      this.payLoading.set(false);
      return;
    }

    this.resSvc.create({
      userId,
      flightClassId: this.flightClassId,
      passengers,
      promotionCode: promo ? this.promoCode : undefined,
    }).subscribe({
      next: res => {
        const reservation = res.data;

        passengers.forEach(p => {
          const next = new Set(this.occupiedSeats());
          next.add(p.seatNumber);
          this.occupiedSeats.set(next);
        });

        this.paymentSvc.create({
          reservationId: reservation.id,
          amount: reservation.totalAmount,
          provider: this.payForm.value.provider!,
          transactionId: generateTxId(),
        }).subscribe({
          next: payRes => {
            const payment = payRes.data;

            setTimeout(() => {
              this.invoiceSvc.byPayment(payment.id).subscribe({
                next: invRes => {
                  this.payLoading.set(false);
                  this.successData.set({
                    reservationId: reservation.id,
                    reservationCode: reservation.reservationCode,
                    invoice: invRes.data,
                    passengers,
                    flightClassId: this.flightClassId,
                    totalAmount: Number(reservation.totalAmount ?? 0),
                  });
                },
                error: () => {
                  this.payLoading.set(false);
                  this.successData.set({
                    reservationId: reservation.id,
                    reservationCode: reservation.reservationCode,
                    invoice: null,
                    passengers,
                    flightClassId: this.flightClassId,
                    totalAmount: Number(reservation.totalAmount ?? 0),
                  });
                },
              });
            }, 1200);
          },
          error: () => {
            this.payLoading.set(false);
            this.successData.set({
              reservationId: reservation.id,
              reservationCode: reservation.reservationCode,
              invoice: null,
              passengers,
              flightClassId: this.flightClassId,
              totalAmount: Number(reservation.totalAmount ?? 0),
            });
          },
        });
      },
      error: err => {
        this.errorMsg.set(err?.error?.error?.message ?? 'Error al crear la reserva. Puede que un asiento ya esté ocupado.');
        this.payLoading.set(false);
        this.step.set(2);
        this.loadOccupiedSeats();
      },
    });
  }
}