
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TicketService } from '../../services/ticket.service';
import { StatusService } from '../../services/status.service';
import { Ticket, Status } from '../../models/entities.dto';
import { computed } from '@angular/core';

interface EnrichedTicket extends Ticket {
  status?: Status;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  imports: [CommonModule, DatePipe],
})
export class TicketsComponent implements OnInit {
  private ticketService = inject(TicketService);
  private statusService = inject(StatusService);

  tickets = signal<EnrichedTicket[]>([]);
  statuses = signal<Status[]>([]);
  statusMap = computed(() => {
    const map = new Map<number, Status>();
    this.statuses().forEach(s => map.set(s.id, s));
    return map;
  });

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    const [ticketsData, statusesData] = await Promise.all([
      this.ticketService.getAllTickets(),
      this.statusService.getAllStatuses()
    ]);
    this.statuses.set(statusesData);
    const enrichedTickets = ticketsData.map(ticket => ({
      ...ticket,
      status: this.statusMap().get(ticket.statusId)
    }));
    this.tickets.set(enrichedTickets);
  }

  getPriorityText(level: number): string {
    if (level === 3) return 'عالية';
    if (level === 2) return 'متوسطة';
    return 'منخفضة';
  }

  getPriorityClass(level: number): string {
    if (level === 3) return 'bg-red-100 text-red-800';
    if (level === 2) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  }

  getStatusClass(color: string | undefined): string {
    if(!color) return 'bg-gray-100 text-gray-800';
    return `bg-${color}-100 text-${color}-800`;
  }
}
