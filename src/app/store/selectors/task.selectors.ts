import { createSelector } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';

export const selectTaskState = (state: any) => state.tasks;

export const selectTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);
