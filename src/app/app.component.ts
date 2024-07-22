import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './model/task.model';
import { addTask, removeTask, updateTask, loadTasks } from './store/actions/task.actions';
import { selectTasks, selectError } from './store/selectors/task.selectors';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,

  imports: [
    AsyncPipe,
    NgForOf,
    NgIf
  ]
})
export class AppComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);
  error$: Observable<string | null> = this.store.select(selectError);
  newTask: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTasks()); // Charger les tâches au démarrage si nécessaire
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

  removeTask(id: number) {
    this.store.dispatch(removeTask({ id }));
  }

  updateTask(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }
}
