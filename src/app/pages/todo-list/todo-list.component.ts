import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TodoDescriptionComponent} from "../todo-description/todo-description.component";
import {TodosService} from '../../todos.service'
import {IFormGroupTodo} from "../../todo";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule, FormGroup, FormArray, FormBuilder} from "@angular/forms";
import {NewTodoComponent} from "../new-todo/new-todo.component";
import {Subscription} from "rxjs";
import {TuiDay} from "@taiga-ui/cdk";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDescriptionComponent, RouterModule, FormsModule, ReactiveFormsModule, NewTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnDestroy, OnInit{
  public todosService: TodosService = inject(TodosService);
  public formArrayTodo!: FormArray<FormGroup<IFormGroupTodo>>;

  private nfb = new FormBuilder().nonNullable;
  private subForm?: Subscription;

  ngOnInit(): void {
    const newArr = this.nfb.array<FormGroup<IFormGroupTodo>>([])

    for (const item of  this.todosService.getAllTodo()) {
      const dateStr = item.date.toString().split("-");

      const newGroup = this.nfb.group<IFormGroupTodo>({

        id: this.nfb.control(item.id),
        title: this.nfb.control(item.title),
        description: this.nfb.control(item.description),
        date: this.nfb.control(new TuiDay (Number(dateStr[0]), Number(dateStr[1])-1, Number(dateStr[2]))),
        completed: this.nfb.control(item.completed),
      })

      newArr.controls.push(newGroup);
    }

    this.formArrayTodo = newArr;

    /*this.subForm = this.formArrayTodo.valueChanges.subscribe((data) => {
       console.log(data)
       this.todosService.rerecordTodo(this.todoForm.getRawValue())
    })*/
  }

  ngOnDestroy() {
    // Метод работает, но при закрытии и перезагрузке нет
  }

  addTodo(item: string): void {
    const newTodo = JSON.parse(item)
    let newGroup: FormGroup;
    if(newTodo.date){
      const date = newTodo.date.split("-")

      newGroup = this.nfb.group<IFormGroupTodo>({
        id: this.nfb.control(newTodo.id),
        title: this.nfb.control(newTodo.title),
        description: this.nfb.control(newTodo.description),
        date: this.nfb.control(new TuiDay (Number(date[0]), Number(date[1])-1, Number(date[2]))),
        completed: this.nfb.control(newTodo.completed),
      })
    } else {
      const date = new Date().toLocaleDateString().split('.');

      newGroup = this.nfb.group<IFormGroupTodo>({
        id: this.nfb.control(newTodo.id),
        title: this.nfb.control(newTodo.title),
        description: this.nfb.control(newTodo.description),
        date: this.nfb.control(new TuiDay (Number(date[2]), Number(date[1])-1, Number(date[0])+1)),
        completed: this.nfb.control(newTodo.completed),
      })
    }

    this.formArrayTodo.push(newGroup)
    this.todosService.rerecordTodo(this.formArrayTodo.getRawValue())
  }

  deleteTodo(item: string){
    // Получаем todo
    let newTodo = JSON.parse(item)
    this.formArrayTodo.controls.splice(this.formArrayTodo.controls.indexOf(newTodo), 1);
    this.subForm?.unsubscribe();
    this.todosService.rerecordTodo(this.formArrayTodo.getRawValue())
  }

  changeTodo(){
    this.todosService.rerecordTodo(this.formArrayTodo.getRawValue())
  }
}
