import { Component, OnInit, Input } from '@angular/core';
import { TodosService, Todo } from '../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}
  public fetchData: Observable<boolean>;
  public todos: Observable<Todo[]>;


  ngOnInit(): void {
    // initialize the both observables
    this.fetchData = this.todosService.getTodos();
    this.todos = this.todosService.todos$;
  }

  // call the service
  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  // call the service
  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }
}
