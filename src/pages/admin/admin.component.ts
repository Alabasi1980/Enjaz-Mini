
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AdminComponent {}
