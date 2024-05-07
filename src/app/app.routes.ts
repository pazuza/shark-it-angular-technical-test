import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'tasks', title: 'Tarefas', component: TasksComponent }
];
