import { Component, EventEmitter, Output } from '@angular/core';

import { TaskCreateComponent } from 'src/app/components/tasks/task-create/task-create.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TaskCreateComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() newTaskDescription: EventEmitter<string> = new EventEmitter();

  public receiveNewTask(description: string): void {
    this.newTaskDescription.emit(description);
  }
}
