// src/app/store/effects/task.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service.service';
import {
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
  addTask,
  addTaskSuccess,
  addTaskFailure,
  removeTask,
  removeTaskSuccess,
  removeTaskFailure,
} from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => loadTasksSuccess({ tasks })),
          catchError(error => of(loadTasksFailure({ error: error.message })))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap(action =>
        this.taskService.addTask(action.task).pipe(
          map(task => addTaskSuccess({ task })),
          catchError(error => of(addTaskFailure({ error: error.message })))
        )
      )
    )
  );

  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTask),
      mergeMap(action =>
        this.taskService.removeTask(action.id).pipe(
          map(() => removeTaskSuccess({ id: action.id })),
          catchError(error => of(removeTaskFailure({ error: error.message })))
        )
      )
    )
  );
}
