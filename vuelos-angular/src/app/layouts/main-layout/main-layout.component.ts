import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStore } from '../../core/store/auth.store';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="min-h-screen bg-[#050816] flex flex-col">
      <header class="sticky top-0 z-50 border-b border-amber-500/15 bg-[#080B16]/95 backdrop-blur-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a routerLink="/" class="group flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M3 15.5L21 4.5L14.5 20L11 13L3 15.5ZM11 13L21 4.5"/>
                </svg>
              </div>
              <div class="leading-tight">
                <p class="font-black text-white text-lg">AeroWilly</p>
                <p class="hidden sm:block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Premium flights</p>
              </div>
            </a>

            <nav class="hidden md:flex items-center gap-2 text-sm font-semibold">
              <a routerLink="/"
                class="flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/>
                </svg>
                Buscar vuelos
              </a>

              <a *ngIf="auth.isAuthenticated()" routerLink="/my-trips"
                class="flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Mis viajes
              </a>

              <a *ngIf="auth.isAdmin()" routerLink="/admin"
                class="flex items-center gap-2 px-4 py-2 rounded-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Admin
              </a>
            </nav>

            <div class="flex items-center gap-3">
              <ng-container *ngIf="auth.isAuthenticated(); else guestBtns">
                <div class="hidden sm:flex items-center gap-3 rounded-full bg-[#111827] border border-white/10 px-3 py-1.5">
                  <div class="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs shadow-[0_0_30px_rgba(245,158,11,0.06)]">
                    {{ auth.user()?.firstName?.charAt(0)?.toUpperCase() }}
                  </div>
                  <div class="leading-tight">
                    <p class="text-xs font-bold text-slate-100">{{ auth.user()?.firstName }}</p>
                    <p class="text-[10px] text-slate-400 uppercase tracking-wider">Conectado</p>
                  </div>
                </div>

                <button (click)="logout()"
                  class="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-red-500 rounded-full px-3 py-2 hover:bg-red-50 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                  </svg>
                  <span class="hidden sm:inline">Salir</span>
                </button>
              </ng-container>

              <ng-template #guestBtns>
                <a routerLink="/login" class="text-sm font-bold text-slate-300 hover:text-amber-600 transition-colors">
                  Iniciar sesión
                </a>
                <a routerLink="/register"
                  class="text-sm font-black bg-amber-500 text-white px-5 py-2.5 rounded-2xl hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all">
                  Registrarse
                </a>
              </ng-template>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1">
        <router-outlet />
      </main>

      <footer class="bg-slate-950 text-slate-400 py-8">
        <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>AeroWilly © {{ year }} · Plataforma académica · William Carrion</p>
          <p class="font-semibold text-slate-400">Microservicios · API Gateway · Angular · William Carrion</p>
        </div>
      </footer>
    </div>
  `,
})
export class MainLayoutComponent {
  auth   = inject(AuthStore);
  router = inject(Router);
  year   = new Date().getFullYear();

  logout() {
    this.auth.clearAuth();
    this.router.navigate(['/login']);
  }
}




