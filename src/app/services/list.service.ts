
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ListModel } from './../models/list.model';
import { TaskModel } from './../models/task.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private LISTS: ListModel[];
    private apiUrl: string;

    changedList = new EventEmitter();

    constructor(private http: Http) {
        this.apiUrl = 'api/LISTS';
        this.LISTS = [];
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



    getLists(): Promise<ListModel[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as ListModel[])
            .then(lists => this.LISTS = lists)
            .catch(this.handleError);
    }

    addList(): Promise<ListModel> {
        return this.http
            .post(this.apiUrl, JSON.stringify({name: '', tasks: []}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as ListModel)
            .then( () => this.changedList.emit() )
            .catch(this.handleError);    
    }

    updateList(list: ListModel) {
        const url = `${this.apiUrl}/${list.id}`;
        return this.http
          .put(url, JSON.stringify(list), {headers: this.headers})
          .toPromise()
          .then(() => list)
          .then( () => this.changedList.emit() )
          .catch(this.handleError);
    }

    delList(list: ListModel) {
        const url = `${this.apiUrl}/${list.id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => this.changedList.emit() )
            .catch(this.handleError);
    }


}