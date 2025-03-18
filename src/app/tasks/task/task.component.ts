import { Component, Input } from '@angular/core';
import { TASK } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';




@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  schemas: []
})
export class TaskComponent {
  @Input({ required: true })
  public task!: TASK;

  constructor(private tasksService: TasksService) {

  }


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
