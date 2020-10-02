import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  title: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo() {
    // construct todo object and add it using the service
    const todo: Todo = {
      id: Date.now(),
      title: this.title,
      complete: false,
    };
    this.todosService.addTodo(todo);
    this.title = '';
  }
}
