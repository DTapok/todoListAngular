import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IFormGroupTodo} from '../../todo';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditTodoComponent} from "../edit-todo/edit-todo.component";
import { Output, EventEmitter } from '@angular/core';
import {TuiInputDateModule, TuiInputModule} from "@taiga-ui/kit";
@Component({
  selector: 'app-todo-description',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EditTodoComponent, TuiInputModule, TuiInputDateModule],
  templateUrl: './todo-description.component.html',
  styleUrl: './todo-description.component.scss'
})
export class TodoDescriptionComponent implements OnInit{
  @Input({required: true}) formGroupTodo!: FormGroup<IFormGroupTodo>;
  @Output() newItemEvent = new EventEmitter<string>();
  protected readonly Date = Date;


  ngOnInit() {
    this.formGroupTodo.disable();
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
