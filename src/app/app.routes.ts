import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-new-task',
    loadComponent: () => import('./add-new-task/add-new-task.page').then( m => m.AddNewTaskPage)
  },
  {
    path: 'update-task-page',
    loadComponent: () => import('./update-task-page/update-task-page.page').then( m => m.UpdateTaskPagePage)
  },

];
