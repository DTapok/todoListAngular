import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IFormGroupTodo} from '../../todo';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditTodoComponent} from "../edit-todo/edit-todo.component";
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo-description',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EditTodoComponent],
  templateUrl: './todo-description.component.html',
  styleUrl: './todo-description.component.css'
})
export class TodoDescriptionComponent implements OnInit{
  @Input({required: true}) formGroupTodo!: FormGroup<IFormGroupTodo>;
  @Output() newItemEvent = new EventEmitter<string>();
  protected readonly Date = Date;
  edit = false

  ngOnInit() {
    this.formGroupTodo.disable();
  }

  changeEdit(){
    this.edit = !this.edit;
  }

  changeStateForm(){
    if (this.formGroupTodo.disabled){
      this.formGroupTodo.enable();
    }else {
      this.formGroupTodo.disable();
    }
  }

  submit(value: any){
    console.log(value)
  }

  deleteTodo(){
    this.newItemEvent.emit(JSON.stringify(this.formGroupTodo.getRawValue()));
  }
}
