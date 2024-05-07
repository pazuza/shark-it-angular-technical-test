import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { Task, TaskStatus } from 'src/app/interfaces/task.interface';

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

  public done: number = TaskStatus.DONE;
  public faPen = faPen;

  public saveTask(description: string, task: Task | null) {
    if (task) {
      task.description = description;

      this.description.emit(task);
    }

    this.closeModal();
  }

  public openModal() {
    if (this.task?.status === this.done) return;

    document.getElementById('edit-modal')?.classList.add('is-active');
  }

  public closeModal() {
    document.getElementById('edit-modal')?.classList.remove('is-active');
  }

  public setTaskNull(): void {
    this.task = undefined;
  }
}
