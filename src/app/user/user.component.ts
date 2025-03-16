import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../constants/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public selectedUser = DUMMY_USERS[0];


  get userImageSrc() {
    return 'users/' + this.selectedUser.avatar;
  }
}
