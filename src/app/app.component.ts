import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../constants/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';
  public selectedUserId?: string;

  users = DUMMY_USERS


  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    const selectedUser = DUMMY_USERS.find((user) => user.id === id);
    this.selectedUserId = id;
  }
}
