import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service.service';
import { addTask, removeTask } from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap((action) =>
        this.taskService.addTask(action.task).pipe(
          map(() => addTask({ task: action.task })),
          catchError(() => of({ type: '[Task] Add Task Failed' }))
        )
      )
    )
  );
}
