
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  email = signal('admin@enjaz.com');
  password = signal('password'); // Dummy password for UI
  errorMessage = signal('');

  async login() {
    this.errorMessage.set('');
    const success = await this.authService.login(this.email());
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage.set('البريد الإلكتروني غير صحيح.');
    }
  }
}
