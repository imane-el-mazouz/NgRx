// src/app/store/task-store.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from '../../src/app/store/reducers/task.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('tasks', taskReducer) // Configuration de feature ici
  ]
})
export class TaskStoreModule {}
