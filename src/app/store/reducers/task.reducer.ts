// src/app/store/reducers/task.reducer.ts
import { createReducer, on, Action } from '@ngrx/store';
import { Task } from '../../model/task.model';
import {
  addTaskSuccess,
  removeTaskSuccess,
  updateTaskSuccess,
  loadTasksSuccess,
  loadTasksFailure,
  addTaskFailure,
  removeTaskFailure,
  updateTaskFailure
} from '../actions/task.actions';

export interface TaskState {
  tasks: Task[];
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  error: null,
};

const _taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(addTaskSuccess, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(removeTaskSuccess, (state, { id }) => ({ ...state, tasks: state.tasks.filter(task => task.id !== id) })),
  on(updateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => (t.id === task.id ? task : t)),
  })),
  on(loadTasksFailure, addTaskFailure, updateTaskFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function taskReducer(state: TaskState | undefined, action: Action) {
  return _taskReducer(state, action);
}

export class TaskReducer {
}
