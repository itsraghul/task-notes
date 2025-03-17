import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NEW_TASK } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<NEW_TASK>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';


  onFormSubmit() {
    this.newTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }

  onCloseDialog() {
    this.cancel.emit();
  }
}
