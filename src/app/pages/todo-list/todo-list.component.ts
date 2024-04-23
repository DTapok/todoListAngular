import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TodoDescriptionComponent} from "../todo-description/todo-description.component";
import {TodosService} from '../../todos.service'
import {IFormGroupTodo} from "../../todo";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule, FormGroup, FormArray, FormBuilder} from "@angular/forms";
import {EditTodoComponent} from "../edit-todo/edit-todo.component";
import {NewTodoComponent} from "../new-todo/new-todo.component";
import {Subscription} from "rxjs";
import {TuiDay} from "@taiga-ui/cdk";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDescriptionComponent, RouterModule, FormsModule, ReactiveFormsModule, EditTodoComponent, NewTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnDestroy, OnInit{
  public todosService: TodosService = inject(TodosService);
  public formArrayTodo!: FormArray<FormGroup<IFormGroupTodo>>;

  private nnfb = new FormBuilder().nonNullable;
  private subForm?: Subscription;

  ngOnInit(): void {
    const newArr = this.nnfb.array<FormGroup<IFormGroupTodo>>([])

    for (const item of  this.todosService.getAllTodo()) {
      const newGroup = this.nnfb.group<IFormGroupTodo>({
        id: this.nnfb.control(item.id),
        title: this.nnfb.control(item.title),
        description: this.nnfb.control(item.description),
        date: this.nnfb.control(item.date),
        completed: this.nnfb.control(item.completed),
      })

      newArr.controls.push(newGroup);
    }

    this.formArrayTodo = newArr;

    this.subForm = this.formArrayTodo.valueChanges.subscribe((data) => {
      console.log(data)
      // this.todosService.rerecordTodo(this.todoForm.getRawValue())
    })
  }

  ngOnDestroy() {
    // Метод работает, но при закрытии и перезагрузке нет
  }

  addTodo(item: string): void {

    const newTodo = JSON.parse(item)
    const date = newTodo.date.split("-")


    const newGroup = this.nnfb.group<IFormGroupTodo>({
      id: this.nnfb.control(newTodo.id),
      title: this.nnfb.control(newTodo.title),
      description: this.nnfb.control(newTodo.description),
      date: this.nnfb.control(new TuiDay (Number(date[0]), Number(date[1]), Number(date[2]))),
      completed: this.nnfb.control(newTodo.completed),
    })

    console.log(newGroup.getRawValue().date)

    this.formArrayTodo.push(newGroup)
    this.todosService.rerecordTodo(this.formArrayTodo.getRawValue())
  }

  deleteTodo(item: string){
    // Получаем todo
    let newTodo = JSON.parse(item)
    this.formArrayTodo.controls.splice(this.formArrayTodo.controls.indexOf(newTodo), 1);
    this.subForm?.unsubscribe();
  }

  testMethod(){}


}
