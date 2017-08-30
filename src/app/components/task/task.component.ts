import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { TaskModel } from './../../models/task.model';
import { NoteModel } from './../../models/note.model';
import { NoteService } from './../../services/note.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html'  
})
export class TaskComponent {
  
  overable: boolean = false;
  editable: boolean = false;
  @ViewChild('taskName') taskName: ElementRef;
  @Input() task: TaskModel;
  @Input() note: NoteModel;
  

  constructor(private noteService: NoteService) {  }

  editTask() {
    this.editable = !this.editable;
  }

  sendTask() {
    this.task.name = this.taskName.nativeElement.value;
    this.updateTask();
    this.editTask();
  }

  updateTask() {
    this.noteService.updateNote(this.note);
  }

  deleteTask() {
    let index = this.note.tasks.indexOf(this.task);
    this.note.tasks.splice(index, 1);

    this.noteService.updateNote(this.note);
  }

  mover() {
    this.overable = true;
  }

  mout() {
    this.overable = false;
  }

  

}
