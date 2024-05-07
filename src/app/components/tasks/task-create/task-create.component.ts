import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task-create',
  standalone: true,
  imports: [],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  @Output() create: EventEmitter<string> = new EventEmitter();

  public createTask(description: string) {
    this.create.emit(description);

    this.closeModal();
  }

  public openModal() {
    document.getElementById('create-modal')?.classList.add('is-active');
  }

  public closeModal() {
    document.getElementById('create-modal')?.classList.remove('is-active');
  }
}
