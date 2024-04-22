import { Component, inject} from '@angular/core';
import {TodoDescriptionComponent} from "../todo-description/todo-description.component";
import {TodosService} from '../../todos.service'
import {Todo} from "../../todo";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDescriptionComponent,RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList: string;
  todosService: TodosService = inject(TodosService);
  todo1: Todo = {
    id: 9999,
    title: 'Test Home',
    description:'test',
    date: new Date(2025,0, 1).toString(),
    completed: false
  };

  constructor() {
    this.todoList = this.todosService.getAllTodo()
  }
}
