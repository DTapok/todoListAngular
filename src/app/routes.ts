import {Routes} from '@angular/router';
import {TodoListComponent} from './pages/todo-list/todo-list.component';
import {TodoDescriptionComponent} from './pages/todo-description/todo-description.component';
import {EditTodoComponent} from './pages/edit-todo/edit-todo.component'
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
