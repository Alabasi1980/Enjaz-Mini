
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'tickets',
        loadComponent: () => import('./features/tickets/tickets.component').then(m => m.TicketsComponent),
      },
      {
        path: 'tasks',
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { title: 'المهام' }
      },
      {
        path: 'complaints',
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { title: 'الشكاوى' }
      },
      {
        path: 'suggestions',
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { title: 'الاقتراحات والاستفسارات' }
      },
      {
        path: 'admin',
        loadComponent: () => import('./features/admin/admin.component').then(m => m.AdminComponent),
        children: [
          { path: '', redirectTo: 'users', pathMatch: 'full' },
          { path: 'users', loadComponent: () => import('./features/admin/users/users.component').then(m => m.UsersComponent) },
          { path: 'statuses', loadComponent: () => import('./features/admin/statuses/statuses.component').then(m => m.StatusesComponent) },
          { path: 'departments', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'إدارة الأقسام' } },
          { path: 'priorities', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'إدارة الأولويات' } },
        ]
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
