import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todo} from '../../todo';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-todo-description',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-description.component.html',
  styleUrl: './todo-description.component.css'
})
export class TodoDescriptionComponent {
  @Input({required: true}) todo!: Todo;
  protected readonly Date = Date;
}
