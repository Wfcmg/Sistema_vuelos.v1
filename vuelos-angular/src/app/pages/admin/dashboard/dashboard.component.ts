import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthStore } from '../../../core/store/auth.store';

const CARDS = [
  { label: 'Vuelos',     path: '/admin/flights',      color: 'bg-[#0B0B0D] border-red-900/50 text-red-400 hover:bg-[#160708] hover:border-red-500/70 hover:shadow-[0_0_28px_rgba(220,38,38,0.16)]' },
  { label: 'Reservas',   path: '/admin/reservations', color: 'bg-[#0B0B0D] border-red-900/50 text-red-400 hover:bg-[#160708] hover:border-red-500/70 hover:shadow-[0_0_28px_rgba(220,38,38,0.16)]' },
  { label: 'Usuarios',   path: '/admin/users',        color: 'bg-[#0B0B0D] border-red-900/50 text-red-400 hover:bg-[#160708] hover:border-red-500/70 hover:shadow-[0_0_28px_rgba(220,38,38,0.16)]' },
  { label: 'Pagos',      path: '/admin/payments',     color: 'bg-[#0B0B0D] border-red-900/50 text-red-400 hover:bg-[#160708] hover:border-red-500/70 hover:shadow-[0_0_28px_rgba(220,38,38,0.16)]' },
  { label: 'Aeropuertos',path: '/admin/airports',     color: 'bg-[#0B0B0D] border-red-900/50 text-red-400 hover:bg-[#160708] hover:border-red-500/70 hover:shadow-[0_0_28px_rgba(220,38,38,0.16)]' },
  { label: 'Promociones',path: '/admin/promotions',   color: 'bg-[#0B0B0D] border-red-900/50 text-red-400 hover:bg-[#160708] hover:border-red-500/70 hover:shadow-[0_0_28px_rgba(220,38,38,0.16)]' },
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <h1 class="text-2xl font-bold text-white mb-2">Dashboard</h1>
      <p class="text-sm text-zinc-400 mb-8">Bienvenido, {{ auth.user()?.firstName }}. Panel de administración.</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <a *ngFor="let c of cards" [routerLink]="c.path"
          [class]="'group border rounded-2xl p-5 transition-all cursor-pointer hover:-translate-y-0.5 ' + c.color">
          <p class="text-lg font-bold">{{ c.label }}</p>
          <p class="text-xs opacity-70 mt-1">Gestionar →</p>
        </a>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  auth  = inject(AuthStore);
  cards = CARDS;
}


