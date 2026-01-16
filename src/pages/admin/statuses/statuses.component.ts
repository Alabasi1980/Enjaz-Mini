
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusService } from '../../../services/status.service';
import { Status } from '../../../dtos/entities.dto';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  imports: [CommonModule, FormsModule],
})
export class StatusesComponent implements OnInit {
  private statusService = inject(StatusService);
  
  statuses = signal<Status[]>([]);
  newStatus = signal<Omit<Status, 'id'>>({ name: '', color: 'gray' });
  availableColors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

  ngOnInit() {
    this.loadStatuses();
  }

  async loadStatuses() {
    this.statuses.set(await this.statusService.getAllStatuses());
  }

  async addStatus() {
    if (this.newStatus().name) {
      await this.statusService.createStatus(this.newStatus());
      this.newStatus.set({ name: '', color: 'gray' });
      await this.loadStatuses();
    }
  }

  async deleteStatus(id: number) {
    if (confirm('هل أنت متأكد من حذف هذه الحالة؟')) {
      await this.statusService.deleteStatus(id);
      await this.loadStatuses();
    }
  }
}
