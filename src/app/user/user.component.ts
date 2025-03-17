import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USER } from './user.model';
import { CardComponent } from '../shared/card/card.component';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) public user!: USER;
  @Input({ required: true }) public selected!: boolean;
  @Output() select = new EventEmitter<string>();

  getImagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(
      this.user.id
    )
  }
}



