import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users: User[] = [];
  loading = true;
  error = '';
  source = '';
  count = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    this.usersService.getUsers().subscribe({
      next: (res) => {
        this.users = res.data;
        this.source = res.source;
        this.count = res.count;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users. Is the backend running?';
        this.loading = false;
      }
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

}
