import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TodosService} from "../../todos.service";
import {Todo} from '../../todo'
@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  todosService: TodosService = inject(TodosService);

  todo: Todo | undefined;
  applyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    data: new FormControl(''),
  });


  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  }
  submitApplication() {

  }
}
