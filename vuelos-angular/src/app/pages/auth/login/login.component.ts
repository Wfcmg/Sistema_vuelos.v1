import { Component, inject, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { AuthStore } from '../../../core/store/auth.store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-[#020617] via-[#090B16] to-[#1C1205] flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <div class="bg-[#0B1020] rounded-2xl shadow-[0_0_45px_rgba(245,158,11,0.12)] p-8">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 bg-amber-500 rounded-2xl mb-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/></svg>
            </div>
            <h1 class="text-2xl font-bold text-white">Bienvenido</h1>
            <p class="text-sm text-slate-400 mt-1">Inicia sesión para continuar</p>
          </div>

          <div *ngIf="errorMsg()" class="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-6">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            {{ errorMsg() }}
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Correo electrónico</label>
              <div class="relative">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <input formControlName="email" type="email" placeholder="tu@email.com"
                  class="w-full pl-10 pr-4 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition" />
              </div>
              <p *ngIf="form.get('email')?.touched && form.get('email')?.invalid" class="text-xs text-red-500 mt-1">Email inválido</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-200 mb-1.5">Contraseña</label>
              <div class="relative">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <input formControlName="password" type="password" placeholder="••••••••"
                  class="w-full pl-10 pr-4 py-2.5 border border-white/15 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition" />
              </div>
              <p *ngIf="form.get('password')?.touched && form.get('password')?.invalid" class="text-xs text-red-500 mt-1">Mínimo 6 caracteres</p>
            </div>

            <button type="submit" [disabled]="loading()"
              class="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-white font-medium py-2.5 rounded-lg transition-colors">
              <svg *ngIf="loading()" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              {{ loading() ? 'Iniciando sesión...' : 'Iniciar sesión' }}
            </button>
          </form>

          <p class="text-center text-sm text-slate-400 mt-6">
            ¿No tienes cuenta? <a routerLink="/register" class="text-amber-500 font-medium hover:underline">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  private svc    = inject(AuthService);
  private auth   = inject(AuthStore);
  private router = inject(Router);
  private fb     = inject(FormBuilder);

  loading  = signal(false);
  errorMsg = signal<string | null>(null);

  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.errorMsg.set(null);
    this.svc.login(this.form.value as any).subscribe({
      next: () => this.router.navigate([this.auth.isAdmin() ? '/admin/dashboard' : '/']),
      error: (err) => {
        this.errorMsg.set(err?.error?.error?.message ?? 'Error al iniciar sesión');
        this.loading.set(false);
      },
    });
  }
}



