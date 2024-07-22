import { createReducer, on } from '@ngrx/store';
import { loadTasksSuccess, addTask } from '../actions/task.actions';
import { TaskState, initialTaskState } from '../../model/task.state';

export const taskReducer = createReducer(
  initialTaskState,
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] }))
);
