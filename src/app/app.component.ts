// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './model/task.model';
import { loadTasks, addTask } from './store/actions/task.actions';
import { selectTasks } from './store/selectors/task.selectors';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    FormsModule
  ]
})
export class AppComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);
  newTask: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  addTask() {
    if (this.newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        description: this.newTask,
        completed: false
      };
      this.store.dispatch(addTask({ task }));
      this.newTask = '';
    }
  }
}
