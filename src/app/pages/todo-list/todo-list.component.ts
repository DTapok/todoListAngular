import {Component, inject, OnDestroy, OnInit} from '@angular/core';
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
export class TodoListComponent implements OnDestroy, OnInit{
  todoList!:  Todo[];
  todosService: TodosService = inject(TodosService);

  constructor() {}

  ngOnInit() {
    this.todoList = this.todosService.getAllTodo();
    console.log(this.todoList)
  }

  ngOnDestroy() {
    // Передача объкта в хранилище  this.todosService.rerecordTodo(test)
  }
}
