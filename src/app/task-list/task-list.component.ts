import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { AppState } from '../app.state';
import {addTask, loadTasks, loadTasksSuccess} from '../../app/store/actions/task.actions';
import { selectTasks } from '../../app/store/selectors/task.selectors';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgIf, FormsModule]
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);
  newTaskDescription: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadTasksSuccess({ tasks: [] })); // Example to initialize tasks
  }

  addTask() {
    if (this.newTaskDescription.trim()) {
      const task: Task = {
        id: Date.now(),
        description: this.newTaskDescription,
        completed: false,
      };
      this.store.dispatch(addTask({ task }));
      this.newTaskDescription = '';
    }
  }


}
