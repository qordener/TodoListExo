import { Action } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export const ADD_TODO = '[TODO] Add';
export const DELETE_TODO = '[TODO] Delete';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: number) {}
}

export type Actions = AddTodo | DeleteTodo;
