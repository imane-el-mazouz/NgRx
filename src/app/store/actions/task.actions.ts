// src/app/store/actions/task.actions.ts
import { createAction, props } from '@ngrx/store';
import { Task } from '../../model/task.model';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Task] Load Tasks Failure', props<{ error: string }>());

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const addTaskSuccess = createAction('[Task] Add Task Success', props<{ task: Task }>());
export const addTaskFailure = createAction('[Task] Add Task Failure', props<{ error: string }>());

export const removeTask = createAction('[Task] Remove Task', props<{ id: number }>());
export const removeTaskSuccess = createAction('[Task] Remove Task Success', props<{ id: number }>());
export const removeTaskFailure = createAction('[Task] Remove Task Failure', props<{ error: string }>());

export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
export const updateTaskSuccess = createAction('[Task] Update Task Success', props<{ task: Task }>());
export const updateTaskFailure = createAction('[Task] Update Task Failure', props<{ error: string }>());
