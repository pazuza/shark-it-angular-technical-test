import { Component } from '@angular/core';

import { TaskCreateComponent } from 'src/app/components/tasks/task-create/task-create.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TaskCreateComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
