import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'task-delete',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.css'
})
export class TaskDeleteComponent {
  @Input() public task: Task | undefined;
  @Output() delete: EventEmitter<Task> = new EventEmitter();

  public faTrash = faTrash;

  public deleteTask(task: Task | null) {
    if (task) {
      this.delete.emit(task);
    }

    this.closeModal();
  }

  public openModal() {
    document.getElementById('delete-modal')?.classList.add('is-active');
  }

  public closeModal() {
    document.getElementById('delete-modal')?.classList.remove('is-active');
  }

  public setTaskNull(): void {
    this.task = undefined;
  }
}
