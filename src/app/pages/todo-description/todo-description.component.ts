import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IFormGroupTodo, Todo} from '../../todo';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Output, EventEmitter } from '@angular/core';
import {TuiCheckboxLabeledModule, TuiInputDateModule, TuiInputModule, TuiTextareaModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@Component({
  selector: 'app-todo-description',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TuiInputModule, TuiInputDateModule, TuiCheckboxLabeledModule, TuiButtonModule, TuiTextareaModule],
  templateUrl: './todo-description.component.html',
  styleUrl: './todo-description.component.scss'
})
export class TodoDescriptionComponent implements OnInit{
  @Input() todo !: Todo;
  @Output() newItemEventDelete = new EventEmitter<string>();
  @Output() newItemEventChange = new EventEmitter<Todo>();
  formGroupTodo!: FormGroup<IFormGroupTodo>;
  private nfb = new FormBuilder().nonNullable;
  nowDate = new Date();

  ngOnInit() {
    this.formGroupTodo = new FormGroup<IFormGroupTodo>( {
      id: this.nfb.control(this.todo.id),
      title: this.nfb.control(this.todo.title),
      description: this.nfb.control(this.todo.description),
      date: this.nfb.control(this.todo.date),
      completed: this.nfb.control(this.todo.completed),
    })
    this.formGroupTodo.disable();
  }


  changeStateForm(){
    if (this.formGroupTodo.disabled){
      this.formGroupTodo.enable();
    }else {
      this.formGroupTodo.disable();

      this.todo = this.formGroupTodo.getRawValue()

      this.newItemEventChange.emit(this.todo);
    }

  }

  deleteTodo(){
    this.newItemEventDelete.emit(this.todo.id);
  }
}
