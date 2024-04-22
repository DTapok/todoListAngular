import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TodosService} from "../../todos.service";
import {Todo} from '../../todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})

export class NewTodoComponent {
  todosService: TodosService = inject(TodosService);

  applyForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
  });

  submitApplication() {
    const {title, description, date} = this.applyForm.getRawValue();
    const todo: Todo = {
      id: uuidv4(),
      title,
      description,
      date,
      completed: false
    };

    const test = [todo,todo, todo]

    this.todosService.rerecordTodo(test)
  }
}

