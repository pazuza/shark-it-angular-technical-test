import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/components/shared/navbar/navbar.component';
import { TaskCreateComponent } from 'src/app/components/tasks/task-create/task-create.component';
import { TaskDeleteComponent } from 'src/app/components/tasks/task-delete/task-delete.component';
import { TaskEditComponent } from 'src/app/components/tasks/task-edit/task-edit.component';
import { Task, TaskStatus } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'tasks',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, TaskCreateComponent, TaskDeleteComponent, TaskEditComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  public backlog: number = TaskStatus.BACKLOG;
  public done: number = TaskStatus.DONE;

  public tasks: Array<Task> = [
    {
      id: uuidv4(),
      description: 'Lavar louça',
      status: TaskStatus.BACKLOG
    },
    {
      id: uuidv4(),
      description: 'Ir no mercado',
      status: TaskStatus.BACKLOG
    },
    {
      id: uuidv4(),
      description: 'Alimentar os gatos',
      status: TaskStatus.DONE
    },
    {
      id: uuidv4(),
      description: 'Lavar Roupa',
      status: TaskStatus.DONE
    },
    {
      id: uuidv4(),
      description: 'Fazer comida',
      status: TaskStatus.DONE
    }
  ];

  public setDone(task: Task, $event: any): void {
    this.tasks.find(() => task.status = $event.target.checked);
  }

  public receiveEditedTask(task: Task): void {
    const taskIndex: number = this.tasks.findIndex((taskItem) => task.id === taskItem.id);

    if (taskIndex !== -1) this.tasks[taskIndex] = task;
  }

  public receiveDeletedTask(task: Task): void {
    const taskIndex: number = this.tasks.findIndex((taskItem) => task.id === taskItem.id);

    if (taskIndex !== -1) this.tasks.splice(taskIndex, 1);
  }
}
