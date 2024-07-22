import { Task } from '../model/task.model';

export interface TaskState {
  tasks: Task[];
}

export const initialTaskState: TaskState = {
  tasks: [
    { id: 1, description: 'Learn NgRx', completed: false },
    { id: 2, description: 'Build a project', completed: false }
  ],

};
