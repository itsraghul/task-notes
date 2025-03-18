import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../constants/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { initVelt } from '@veltdev/client';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-test';
  public selectedUserId?: string;

  users = DUMMY_USERS

  veltClient: any;

  constructor() {
    this.initVelt();
  }

  // Initialize velt sdk
  async initVelt() {
    this.veltClient = await initVelt(environment.veltApiKey);
    this.setUser();
    this.setDocument()
  }

  setUser() {
    if (this.veltClient) {
      const user = {
        userId: '1',
        organizationId: 'organizationId123', // this is the organization id the user belongs to. You should always use this.
        name: 'Raghul',
        email: 'itsraghul2521@gmail.com',
        photoUrl: '',
        color: '#f5f5f5', // Use valid Hex code value. Used in the background color of the user's avatar.
        textColor: "blue" // Use valid Hex code value. Used in the text color of the user's intial when photoUrl is not present.
      }; // Your user object here 
      this.veltClient.identify(user);
    }
  }

  setDocument() {
    if (this.veltClient) {
      this.veltClient.setDocument('DOC-1', { documentName: 'Task' });
    }
  }


  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    const selectedUser = DUMMY_USERS.find((user) => user.id === id);
    this.selectedUserId = id;
  }
}
