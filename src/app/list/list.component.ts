import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService, Todo } from '../services/todo.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    tasks: Observable<Todo[]> = this.todoService.getTasks();

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {}

    deleteTask(id: number): void {
        this.tasks = this.todoService.deleteTaskById(id);
    }

    toggleIsDone(id: number): void {
        // const task = this.tasks.find(t => t.id === id);
        // if (task) {
        //     task.isDone = !task.isDone;
        //     this.todoService.updateTask(task).subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
        // }
    }
}
