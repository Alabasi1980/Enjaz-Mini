
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'tickets',
        loadComponent: () => import('./pages/tickets/tickets.component').then(m => m.TicketsComponent),
      },
      {
        path: 'tasks',
        loadComponent: () => import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { title: 'المهام' }
      },
      {
        path: 'complaints',
        loadComponent: () => import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { title: 'الشكاوى' }
      },
      {
        path: 'suggestions',
        loadComponent: () => import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { title: 'الاقتراحات والاستفسارات' }
      },
      {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
        children: [
          { path: '', redirectTo: 'users', pathMatch: 'full' },
          { path: 'users', loadComponent: () => import('./pages/admin/users/users.component').then(m => m.UsersComponent) },
          { path: 'statuses', loadComponent: () => import('./pages/admin/statuses/statuses.component').then(m => m.StatusesComponent) },
          { path: 'departments', loadComponent: () => import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'إدارة الأقسام' } },
          { path: 'priorities', loadComponent: () => import('./pages/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'إدارة الأولويات' } },
        ]
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
