import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASK } from './task.model';
import { CardComponent } from '../../shared/card/card.component';




@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true })
  public task!: TASK;

  @Output() completeTask = new EventEmitter<string>();


  onCompleteTask() {
    this.completeTask.emit(this.task.id)
  }
}
