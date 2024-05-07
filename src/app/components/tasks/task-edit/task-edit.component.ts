import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'task-edit',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  @Input() public task: Task | undefined;
  @Output() description: EventEmitter<Task> = new EventEmitter();

  public faPen = faPen;

  public saveTask(description: string, task: Task | null) {
    if (task) {
      task.description = description;

      this.description.emit(task);
    }

    this.closeModal();
  }

  public openModal() {
    document.getElementById('edit-modal')?.classList.add('is-active');
  }

  public closeModal() {
    document.getElementById('edit-modal')?.classList.remove('is-active');
  }

  public setTaskNull(): void {
    this.task = undefined;
  }
}
