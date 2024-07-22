// src/app/store/selectors/task.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../../model/task.state';

export const selectTaskFeature = createFeatureSelector<TaskState>('tasks');

export const selectTasks = createSelector(
  selectTaskFeature,
  (state: TaskState) => state.tasks
);


