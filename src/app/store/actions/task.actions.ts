// src/app/store/actions/task.actions.ts
import { createAction, props } from '@ngrx/store';
import { Task } from '../../model/task.model';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
