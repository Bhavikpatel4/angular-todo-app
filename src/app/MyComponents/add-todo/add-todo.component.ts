import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() addTodoEvent: EventEmitter<Todo> = new EventEmitter();
  title: string;
  desc: string;

  addTodoHandler() {
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.addTodoEvent.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
