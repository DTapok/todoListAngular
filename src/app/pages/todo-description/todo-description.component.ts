import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IFormGroupTodo} from '../../todo';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
  @Input({required: true}) formGroupTodo!: FormGroup<IFormGroupTodo>;
  @Output() newItemEventDelete = new EventEmitter<string>();
  @Output() newItemEventChange = new EventEmitter<string>();
  protected readonly Date = Date;
  nowDate = new Date();

  ngOnInit() {
    this.formGroupTodo.disable();
  }


  changeStateForm(){
    if (this.formGroupTodo.disabled){
      this.formGroupTodo.enable();
    }else {
      this.formGroupTodo.disable();
    }
    this.newItemEventChange.emit();
  }

  deleteTodo(){
    this.newItemEventDelete.emit(JSON.stringify(this.formGroupTodo.getRawValue()));
  }
}
