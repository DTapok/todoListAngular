import {Injectable} from '@angular/core';
import {Todo} from "./todo"

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  // Получение всех записей
  getAllTodo(): string{
    const todos = localStorage.getItem("todo");
    return todos ? JSON.parse(todos) : null;
  }

  // Перезапись записей
  overwritingTodo(todoList:object) {

    const todos =  localStorage.getItem("todo")

    if (todos !== null){

    }else {
      localStorage.setItem("todo", JSON.stringify(todoList))
    }

    console.log(localStorage.getItem("todo"))
  }
}
