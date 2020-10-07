import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../app.state';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
  }

  ngOnInit(): void {}
}
