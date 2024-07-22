// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, description: 'Learn NgRx', completed: false },
    { id: 2, description: 'Build a project', completed: false },
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): Observable<Task> {
    this.tasks.push(task);
    return of(task);
  }
}
