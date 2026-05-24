import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import type { City } from '../../../core/models/domain';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-[#020617] via-[#090B16] to-[#1C1205] flex items-center justify-center p-4 py-10">
      <div class="w-full max-w-md">
        <div class="bg-[#0B1020] rounded-2xl shadow-[0_0_45px_rgba(245,158,11,0.12)] p-8">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 bg-amber-500 rounded-2xl mb-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/></svg>
            </div>
            <h1 class="text-2xl font-bold text-white">Crear cuenta</h1>
            <p class="text-sm text-slate-400 mt-1">Únete a VuelosApp</p>
          </div>

          <div *ngIf="errorMsg()" class="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-6">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            {{ errorMsg() }}
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-slate-200 mb-1.5">Nombre *</label>
                <input formControlName="firstName" placeholder="Juan"
                  class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                <p *ngIf="form.get('firstName')?.touched && form.get('firstName')?.invalid" class="text-xs text-red-500 mt-1">Requerido</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-200 mb-1.5">Primer Apellido *</label>
                <input formControlName="firstLastName" placeholder="Pérez"
                  class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                <p *ngIf="form.get('firstLastName')?.touched && form.get('firstLastName')?.invalid" class="text-xs text-red-500 mt-1">Requerido</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-slate-200 mb-1.5">Segundo Nombre</label>
                <input formControlName="secondName" placeholder="Carlos"
                  class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-200 mb-1.5">Segundo Apellido</label>
                <input formControlName="secondLastName" placeholder="García"
                  class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Email *</label>
              <input formControlName="email" type="email" placeholder="tu@email.com"
                class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              <p *ngIf="form.get('email')?.touched && form.get('email')?.invalid" class="text-xs text-red-500 mt-1">Email inválido</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Dirección</label>
              <input formControlName="mainAddress" placeholder="Av. Principal 123"
                class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Ciudad *</label>
              <select formControlName="cityId"
                class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-[#111827] text-white">
                <option value="">Seleccione una ciudad</option>
                <option *ngFor="let c of cities()" [value]="c.id">
                  {{ c.name }}{{ c.country ? ' · ' + c.country.name : '' }}
                </option>
              </select>
              <p *ngIf="form.get('cityId')?.touched && form.get('cityId')?.invalid" class="text-xs text-red-500 mt-1">
                Seleccione una ciudad
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Teléfono</label>
              <input formControlName="phone" placeholder="+593..."
                class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Contraseña *</label>
              <input formControlName="password" type="password" placeholder="••••••••"
                class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              <p *ngIf="form.get('password')?.touched && form.get('password')?.invalid" class="text-xs text-red-500 mt-1">Mínimo 6 caracteres</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Confirmar contraseña *</label>
              <input formControlName="confirmPassword" type="password" placeholder="••••••••"
                class="w-full px-3 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
              <p *ngIf="form.get('confirmPassword')?.touched && form.errors?.['passwordMismatch']" class="text-xs text-red-500 mt-1">Las contraseñas no coinciden</p>
            </div>

            <button type="submit" [disabled]="loading()"
              class="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-white font-medium py-2.5 rounded-lg transition-colors mt-2">
              <svg *ngIf="loading()" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              {{ loading() ? 'Creando cuenta...' : 'Crear cuenta' }}
            </button>
          </form>

          <p class="text-center text-sm text-slate-400 mt-6">
            ¿Ya tienes cuenta? <a routerLink="/login" class="text-amber-500 font-medium hover:underline">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class RegisterComponent implements OnInit {
  private svc    = inject(AuthService);
  private router = inject(Router);
  private fb     = inject(FormBuilder);

  private http = inject(HttpClient);

  cities = signal<City[]>([]);
  citiesLoading = signal(false);

  ngOnInit() {
    this.loadCities();
  }

  private loadCities() {
    this.citiesLoading.set(true);

    this.http.get<any>(`${environment.apiUrl}/cities`).subscribe({
      next: (res) => {
        const data = Array.isArray(res?.data) ? res.data : [];
        const ordered = data.sort((a: City, b: City) =>
          a.name.localeCompare(b.name, 'es')
        );

        this.cities.set(ordered);
        this.citiesLoading.set(false);
      },
      error: () => {
        this.errorMsg.set('No se pudieron cargar las ciudades.');
        this.citiesLoading.set(false);
      }
    });
  }

  loading  = signal(false);
  errorMsg = signal<string | null>(null);

  form = this.fb.group({
    firstName:       ['', Validators.required],
    firstLastName:   ['', Validators.required],
    secondName:      [''],
    secondLastName:  [''],
    email:           ['', [Validators.required, Validators.email]],
    mainAddress:     [''],
    phone:           [''],
    cityId:          ['', Validators.required],
    password:        ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  }, {
    validators: (g) => {
      const pw = g.get('password')?.value;
      const cp = g.get('confirmPassword')?.value;
      return pw && cp && pw !== cp ? { passwordMismatch: true } : null;
    },
  });

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.errorMsg.set(null);
    const { confirmPassword, ...data } = this.form.value as any;
    this.svc.register(data).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errorMsg.set(err?.error?.error?.message ?? 'Error al registrarse');
        this.loading.set(false);
      },
    });
  }
}



