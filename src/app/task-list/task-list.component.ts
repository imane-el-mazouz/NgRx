import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { selectTasks } from '../store/selectors/task.selectors';
import { removeTask, updateTask } from '../store/actions/task.actions';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Dispatch action to load tasks if needed
  }

  removeTask(id: number) {
    this.store.dispatch(removeTask({ id }));
  }

  toggleTaskCompletion(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }
}
