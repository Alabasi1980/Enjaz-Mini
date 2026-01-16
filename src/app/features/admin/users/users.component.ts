
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/entities.dto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [CommonModule, FormsModule],
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService);
  
  users = signal<User[]>([]);
  showAddForm = signal(false);
  newUser = signal<Omit<User, 'id'>>({ name: '', email: '', role: 'Employee', departmentId: 1 });

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.users.set(await this.userService.getAllUsers());
  }

  async addUser() {
    if (this.newUser().name && this.newUser().email) {
      await this.userService.createUser(this.newUser());
      this.resetForm();
      await this.loadUsers();
    }
  }

  async deleteUser(id: number) {
    if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
      await this.userService.deleteUser(id);
      await this.loadUsers();
    }
  }

  resetForm() {
    this.newUser.set({ name: '', email: '', role: 'Employee', departmentId: 1 });
    this.showAddForm.set(false);
  }
}
