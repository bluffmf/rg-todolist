
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { NoteModel } from './../models/note.model';
import { TaskModel } from './../models/task.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
    
    private Notes: NoteModel[] = [];
    private url: string = 'api/Notes';
    private headers = new Headers({'Content-Type': 'application/json'});
    eeNotes = new EventEmitter();

    constructor(private http: Http) {  }

    private errorMonitor(error: any): Promise<any> {
        console.error('Error: ', error); 
        return Promise.reject(error.message || error);
    }

    getNotes(): Promise<NoteModel[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(res => res.json().data as NoteModel[])
            .then(notes => this.Notes = notes)
            .catch(this.errorMonitor);
    }

    createNote(): Promise<NoteModel> {
        return this.http
            .post(this.url, JSON.stringify({name: '', tasks: []}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as NoteModel)
            .then( () => this.eeNotes.emit() )
            .catch(this.errorMonitor);    
    }

    updateNote(note: NoteModel) {
        const url = `${this.url}/${note.id}`;
        return this.http
          .put(url, JSON.stringify(note), {headers: this.headers})
          .toPromise()
          .then(() => note)          
          .catch(this.errorMonitor);
    }

    deleteNote(note: NoteModel) {
        const url = `${this.url}/${note.id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => this.eeNotes.emit() )
            .catch(this.errorMonitor);
    }


}