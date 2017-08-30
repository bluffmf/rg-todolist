import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskModel } from './../../models/task.model';
import { NoteModel } from './../../models/note.model';
import { NoteService } from './../../services/note.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html'  
})
export class NoteComponent {  
  
  @Input() note: NoteModel;
  overable: boolean = false;
  editable: boolean = false;
  tasks: TaskModel[];
  @ViewChild('taskCreator') taskCreator: ElementRef;
  
  
  constructor(private noteService: NoteService) {  }

  mover() {
    this.overable = true;
  }

  mout() {
    this.overable = false;
  }

  addTask(name: string) {
    if (name.trim() === '') return false;
    this.taskCreator.nativeElement.value = '';

    let newTask = new TaskModel(name, false);
    this.note.tasks.push(newTask);

    this.noteService.updateNote(this.note);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note);
  }

  updateNote() {
    if (this.editable) {
      this.noteService.updateNote(this.note);
    }
    this.editable = !this.editable;
  }

  

}
