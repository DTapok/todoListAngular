import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TodoDescriptionComponent} from "../todo-description/todo-description.component";
import {TodosService} from '../../todos.service'
import {IFormGroupTodo} from "../../todo";
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDescriptionComponent,RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnDestroy, OnInit{
  todosService: TodosService = inject(TodosService);
  todoForm!: FormArray<FormGroup<IFormGroupTodo>>;

  private nnfb = new FormBuilder().nonNullable;

  ngOnInit(): void {
    const newArr = this.nnfb.array<FormGroup<IFormGroupTodo>>([])

    for (const item of  this.todosService.getAllTodo()) {
      const newGroup = this.nnfb.group<IFormGroupTodo>({
        id: this.nnfb.control(item.id),
        title: this.nnfb.control(item.title),
        description: this.nnfb.control(item.description),
        date: this.nnfb.control(item.date),
        completed: this.nnfb.control(item.completed),
      })
      newArr.controls.push(newGroup);
    }

    this.todoForm = newArr;

    console.log(this.todoForm.getRawValue())
  }

  ngOnDestroy() {
    // Передача объкта в хранилище  this.todosService.rerecordTodo(test)
  //   this.todoForm.getRawValue()
  }
}
