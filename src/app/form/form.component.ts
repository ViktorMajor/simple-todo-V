import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class FormComponent {
  constructor(private todoService: TodoService) {}

  title: string = '';
  description: string = '';
  isDone: boolean = false;
  id: number = 0;

  onSubmit(): void {
    const newTodo = {
      id: this.id,
      title: this.title,
      description: this.description,
      isDone: this.isDone,
    };
    this.todoService.addTask(newTodo).subscribe();
    this.title = '';
    this.description = '';
    this.isDone = false;
    this.id++;
  }
}
