
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
})
export class HeaderComponent {
  authService = inject(AuthService);
  themeService = inject(ThemeService);
  router = inject(Router);

  currentUser = this.authService.currentUser;
  isDarkMode = computed(() => this.themeService.currentTheme() === 'dark');

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
