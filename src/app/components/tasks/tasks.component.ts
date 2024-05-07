import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/components/shared/navbar/navbar.component';
import { TaskCreateComponent } from 'src/app/components/tasks/task-create/task-create.component';
import { TaskDeleteComponent } from 'src/app/components/tasks/task-delete/task-delete.component';
import { TaskEditComponent } from 'src/app/components/tasks/task-edit/task-edit.component';
import { Task, TaskStatus } from 'src/app/interfaces/task.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'tasks',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, TaskCreateComponent, TaskDeleteComponent, TaskEditComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  public backlog: number = TaskStatus.BACKLOG;
  public done: number = TaskStatus.DONE;

  public tasks: Array<Task> | undefined;

  public constructor(private taskService: TasksService) { }

  public ngOnInit(): void {
    this.getTasks();
  }

  private getTasks() {
    this.taskService.getTasks().subscribe({
      next: (response: Array<Task>) => {
        response.forEach(task => {
          task.id = uuidv4();
        });

        this.tasks = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public setDone(task: Task, $event: any): void {
    this.tasks?.find(() => task.status = $event.target.checked ? TaskStatus.DONE : TaskStatus.BACKLOG);
  }

  public receiveEditedTask(task: Task): void {
    const taskIndex: number | undefined = this.tasks?.findIndex((taskItem) => task.id === taskItem.id);

    if (this.tasks && this.tasks?.length > 0 && taskIndex && taskIndex !== -1) this.tasks[taskIndex] = task;
  }

  public receiveDeletedTask(task: Task): void {
    const taskIndex: number | undefined = this.tasks?.findIndex((taskItem) => task.id === taskItem.id);

    if (this.tasks && this.tasks?.length > 0 && taskIndex && taskIndex !== -1) this.tasks?.splice(taskIndex, 1);
  }
}
