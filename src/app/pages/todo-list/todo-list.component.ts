import {Component, inject, OnInit} from '@angular/core';
import {TodoDescriptionComponent} from "../todo-description/todo-description.component";
import {TodosService} from '../../todos.service'
import {Todo} from "../../todo";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewTodoComponent} from "../new-todo/new-todo.component";
import {TuiDay} from "@taiga-ui/cdk";
import {todosStore} from "../../todo.repository";
import {
  addEntities,
  deleteEntities,
  getAllEntities,
  setEntities,
  updateEntities,
} from "@ngneat/elf-entities";


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoDescriptionComponent, RouterModule, FormsModule, ReactiveFormsModule, NewTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  public todosService: TodosService = inject(TodosService);
  protected readonly todosStore = todosStore;
  protected readonly getAllEntities = getAllEntities;

  // public formArrayTodo!: FormArray<FormGroup<IFormGroupTodo>>;
  // private nfb = new FormBuilder().nonNullable;
  // private subForm?: Subscription;

  ngOnInit(): void{

    // Достаём todo
    todosStore.update(setEntities(this.todosService.getAllTodo()))
  }

  addTodo(item: Todo){
    if(item.date){
      todosStore.update(addEntities(item));
      console.log(todosStore.query(getAllEntities()))
    } else{
      const date = new Date().toLocaleDateString().split('.');
      item.date =  new TuiDay (Number(date[2]), Number(date[1])-1, Number(date[0])+1);
      todosStore.update(addEntities(item));
    }
    this.todosService.rerecordTodo(todosStore.query(getAllEntities()));
  }

  deleteTodo(id: string){
    todosStore.update(deleteEntities(id));
    this.todosService.rerecordTodo(todosStore.query(getAllEntities()));
  }

  changeTodo(item: Todo){
    todosStore.update(updateEntities(item.id, { date: item.date, completed: item.completed, title: item.title, description: item.description }));
    this.todosService.rerecordTodo(todosStore.query(getAllEntities()));
  }

  /*
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

 this.subForm = this.formArrayTodo.valueChanges.subscribe((data) => {
    console.log(data)
    this.todosService.rerecordTodo(this.todoForm.getRawValue())
 })
  }

  ngOnDestroy() {
    // Метод работает, но при закрытии и перезагрузке нет
  }*/

  /*
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
  }*/

  /*
  deleteTodo(item: string){
    // Получаем todo
    let newTodo = JSON.parse(item)
    this.formArrayTodo.controls.splice(this.formArrayTodo.controls.indexOf(newTodo), 1);
    this.subForm?.unsubscribe();
    this.todosService.rerecordTodo(this.formArrayTodo.getRawValue())
  }*/

}
