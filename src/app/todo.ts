import {FormControl} from "@angular/forms";
import {TuiDay} from "@taiga-ui/cdk";

export interface Todo {
  id: string,
  title: string;
  description: string;
  date: TuiDay;
  completed: boolean;
}

export interface IFormGroupTodo {
  id: FormControl<string>,
  title: FormControl<string>;
  description: FormControl<string>;
  date: FormControl<TuiDay>;
  completed: FormControl<boolean>;
}
