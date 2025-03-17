import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NEW_TASK } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true })
  public name!: string;

  @Input({ required: true })
  public userId!: string;

  public isNewTaskClicked: boolean = false;

  constructor(private tasksService: TasksService) {
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }


  onNewTaskClick() {
    this.isNewTaskClicked = true;
  }

  onCancelTask() {
    this.isNewTaskClicked = false;
  }

}
