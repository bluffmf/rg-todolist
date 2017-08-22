import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskModel } from './../../models/task.model';
import { ListModel } from './../../models/list.model';
import { ListService } from './../../services/list.service';

@Component({
  selector: 'rg-list',
  templateUrl: './list.component.html'  
})
export class ListComponent {
  title: string = 'List';
  tasks: TaskModel[];
  @Input() list: ListModel;
  @ViewChild('taskName') taskName: ElementRef;
  editFlag: boolean;
  over: boolean;


  constructor(private listService: ListService) { 
    this.editFlag = false;
    this.over = false;
  }


  addTask(newName: string) {
    if (newName.trim() === '') return false;

    let newTask = new TaskModel(newName, false);
    this.list.tasks.push(newTask);

    this.listService.updateList(this.list);

    this.taskName.nativeElement.value = '';
  }

  delList() {
    this.listService.delList(this.list);
  }

  editList() {
    if (this.editFlag) {
      this.listService.updateList(this.list);
    }
    this.editFlag = !this.editFlag;
  }

  mover() {
    this.over = true;
  }

  mout() {
    this.over = false;
  }

}
