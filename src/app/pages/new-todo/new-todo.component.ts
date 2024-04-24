import {Component, EventEmitter,Output} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Todo} from '../../todo';
import { v4 as uuidv4 } from 'uuid';
import {TuiInputDateModule, TuiInputModule, TuiTextareaModule} from "@taiga-ui/kit";
import { TuiButtonModule, TuiErrorModule, TuiHintModule } from "@taiga-ui/core";

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, TuiInputDateModule, TuiInputModule, TuiButtonModule, TuiTextareaModule, TuiErrorModule, TuiHintModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss'
})

export class NewTodoComponent {
  @Output() newItemEvent = new EventEmitter<Todo>();
  applyForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(),
    date: new FormControl(),
  });

  submitApplication() {
    const {title, description, date} = this.applyForm.getRawValue();
    if(title !== null && title !== ""){
      const todo: Todo = {
        id: uuidv4(),
        title,
        description,
        date,
        completed: false
      };

      this.newItemEvent.emit(todo);
      this.applyForm.reset()
    }
  }
}

