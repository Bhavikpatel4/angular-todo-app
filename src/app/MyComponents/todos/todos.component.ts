import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    const localTodos = localStorage.getItem('todos');

    if(localTodos !== null) {
      this.todos = JSON.parse(localTodos);
    }
    else {
      this.todos = [];
    }
  }

  addTodo(todo: Todo) {
    const newSno = this.todos.length !== 0 ? this.todos[this.todos.length-1].sno : 0;
    todo.sno = newSno != null ? (newSno + 1) : 1;
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Added...");
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Deleted...");
  }

  activeCheckBox(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Completed...");
  }
}
