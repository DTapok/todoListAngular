import {Routes} from '@angular/router';
import {TodoListComponent} from './pages/todo-list/todo-list.component';
import {NewTodoComponent} from './pages/new-todo/new-todo.component';

const routeConfig: Routes = [
  {
    path: '',
    component: TodoListComponent,
    title: 'My List',
  },
  {
    path: 'new',
    component: NewTodoComponent,
    title: 'New Todo',
  },
];

export default routeConfig;
