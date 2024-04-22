import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TodosService} from "../../todos.service";
import {Todo} from '../../todo';

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
    title: new FormControl(''),
    description: new FormControl(''),
    data: new FormControl(''),
  });

  submitApplication() {
    //console.log(this.applyForm.value)
    const todo: Todo = {
      id: 9999,
      title: this.applyForm.value.title!,
      description:this.applyForm.value.description!,
      date: this.applyForm.value.data!,
      completed: false
    };
    this.todosService.overwritingTodo(todo)
  }
}

