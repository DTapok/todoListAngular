import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {IFormGroupTodo, Todo} from '../../todo';
import {RouterModule} from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-description',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-description.component.html',
  styleUrl: './todo-description.component.css'
})
export class TodoDescriptionComponent {
  @Input({required: true}) todo!: FormGroup<IFormGroupTodo>;
  protected readonly Date = Date;
}
