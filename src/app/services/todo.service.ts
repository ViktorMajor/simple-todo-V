import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
//hozzá kellett adnom a subjectet mert a list component nem frissült
// csak így tudtam megoldani


export interface Todo {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor() {}
    private tasksUpdated = new Subject<Todo[]>();

    private tasks: Todo[] = [
        {
            id: 1,
            title: 'Task 1',
            description: 'Description 1',
            isDone: false,
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Description 2',
            isDone: false,
        },
    ];

    public getTasks(): Observable<Todo[]> {
        return this.tasksUpdated.asObservable();
    }

    public addTask(task: Todo): Observable<Todo[]> {
        this.tasks.push(task);
        this.tasksUpdated.next([...this.tasks]);
        return of([...this.tasks]);
    }

    public deleteTaskById(id: number): Observable<Todo[]> {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return of([...this.tasks]);
    }

    public updateTask(task: Todo): Observable<Todo[]> {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        this.tasks[index] = task;
        return of([...this.tasks]);
    }

        
}
