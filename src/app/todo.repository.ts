import { createStore } from '@ngneat/elf';
import {
  withEntities
} from '@ngneat/elf-entities';

import {Todo} from "./todo";

export const todosStore = createStore({ name: 'todos' }, withEntities<Todo>());
