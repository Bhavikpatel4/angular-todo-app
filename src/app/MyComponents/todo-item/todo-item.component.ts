import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDeleteEvent: EventEmitter<Todo> = new EventEmitter();
  @Output() activeCheckBoxEvent: EventEmitter<Todo> = new EventEmitter();

  todoDeleteHandler(todo: Todo) {
    console.log(todo.title);
    this.todoDeleteEvent.emit(todo);
  }

  activeCheckBoxHandler(todo: Todo) {
    console.log(todo.title);
    this.activeCheckBoxEvent.emit(todo);
  }
}
