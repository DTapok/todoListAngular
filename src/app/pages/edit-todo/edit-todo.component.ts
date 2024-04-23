import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {IFormGroupTodo} from '../../todo'
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent {
  @Input({required: true}) todo!: FormGroup<IFormGroupTodo>;
}
