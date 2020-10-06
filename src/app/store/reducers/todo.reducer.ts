import { Todo } from 'src/app/models/todo.model';
import * as TodoActions from '../actions/todo.actions';

const initialState: Todo[] = [
  {
    id: 0,
    title: 'Todo 1',
    description: 'Test description',
  },
  {
    id: 1,
    title: 'Todo 2',
    description: 'Test description',
  },
  {
    id: 3,
    title: 'Todo 3',
  },
];

export function reducer(
  state: Todo[] = initialState,
  action: TodoActions.Actions
) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
