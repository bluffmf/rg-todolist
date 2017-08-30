import { Component } from '@angular/core';
import { NoteModel } from './../../models/note.model';
import { NoteService } from './../../services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {
  notes: NoteModel[]; 
  headerMainText: string = 'SIMPLE TODO LISTS'; 
  headerFromText: string = 'FROM RUBY GARAGE';
  addButtonText: string = 'Add TODO List';
  footerText: string = 'Ruby Garage';

  constructor(private noteService: NoteService) {  }

  ngOnInit() {
    this.noteService.getNotes().then(notes => this.notes = notes);

    this.noteService.eeNotes.subscribe(() => {
      this.noteService.getNotes().then(notes => this.notes = notes);
    });  
  }

  createNote() {    
    this.noteService.createNote();    
  }

}
