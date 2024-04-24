import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import {Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import {TodoListComponent} from "./pages/todo-list/todo-list.component";
import {NgOptimizedImage} from "@angular/common";
import { devTools } from '@ngneat/elf-devtools';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, RouterModule, RouterLink, TuiRootModule, TuiDialogModule, TuiAlertModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent implements OnInit{
  title = 'todolistAngular';

  ngOnInit(){
    devTools();
  }
}
