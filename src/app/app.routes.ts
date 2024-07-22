import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {TaskListComponent} from "./task-list/task-list.component";

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'tasks', component: TaskListComponent },


  { path: 'tasks', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
