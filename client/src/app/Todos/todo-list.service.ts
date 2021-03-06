import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from "rxjs";
import "rxjs/add/operator/map";

import {Todo} from './todo';
import {environment} from "../../environments/environment";

@Injectable()
export class TodoListService {
    private todoUrl: string = environment.API_URL + "todos";

    constructor(private http: Http) {
    }


    getTodos(status?: string): Observable<Todo[]> {
        if(status == "" || status == null) {
            let observable: Observable<any> = this.http.request(this.todoUrl);
            return observable.map(res => res.json());
        } else {
            let observable: Observable<any> = this.http.request(this.todoUrl + "?status=" + status);
            return observable.map(res => res.json());
        }
    }

    getTodoById(id: string): Observable<Todo> {
        return this.http.request(this.todoUrl + "/" + id).map(res => res.json());
    }
}
