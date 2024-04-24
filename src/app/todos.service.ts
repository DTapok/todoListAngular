import {Injectable} from '@angular/core';
import {Todo} from "./todo"

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  // Получение всех записей
  getAllTodo(): Todo[] {

    Storage.prototype['getObj'] = function(key: string) {
      const item = this.getItem(key);
      if (item === null) return [];
      return JSON.parse(item);
    }

    return localStorage['getObj']("todo");
  }



  // Перезапись записей
  rerecordTodo(todos:object) {

    Storage.prototype['setObj'] = function(key: string, obj: any) {
      return this.setItem(key, JSON.stringify(obj))
    }

    localStorage['setObj']("todo", todos)
  }
}
