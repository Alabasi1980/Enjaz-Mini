
import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';
import { UserService } from '../../services/user.service';
import { Ticket } from '../../models/entities.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  private ticketService = inject(TicketService);
  private userService = inject(UserService);

  totalTickets = signal(0);
  openTickets = signal(0);
  totalUsers = signal(0);
  
  recentTickets = signal<Ticket[]>([]);

  async ngOnInit() {
    const tickets = await this.ticketService.getAllTickets();
    const users = await this.userService.getAllUsers();
    
    this.totalTickets.set(tickets.length);
    this.openTickets.set(tickets.filter(t => t.statusId !== 3).length); // Assuming statusId 3 is 'Completed'
    this.totalUsers.set(users.length);

    this.recentTickets.set(tickets.slice(0, 5));
  }
}
