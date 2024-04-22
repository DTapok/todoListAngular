import {FormControl} from "@angular/forms";

export interface Todo {
  id: string,
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

export interface IFormGroupTodo {
  id: FormControl<string>,
  title: FormControl<string>;
  description: FormControl<string>;
  date: FormControl<string>;
  completed: FormControl<boolean>;
}
