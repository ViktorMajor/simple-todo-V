import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    tasks: Todo[] = [];

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todoService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
    }

    deleteTask(id: number): void {
        this.todoService.deleteTaskById(id).subscribe(tasks => {
            this.tasks = tasks;
        });
    }

    toggleIsDone(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isDone = !task.isDone;
            
            this.todoService.updateTask(task).subscribe(tasks => {
                this.tasks = tasks;
            });
        }
    }    
}
