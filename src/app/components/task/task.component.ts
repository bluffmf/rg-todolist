import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { TaskModel } from './../../models/task.model';
import { ListModel } from './../../models/list.model';
import { ListService } from './../../services/list.service';

@Component({
  selector: 'rg-task',
  templateUrl: './task.component.html'  
})
export class TaskComponent {
  
  @Input() task: TaskModel;
  @Input() list: ListModel;
  editFlag: boolean;
  over: boolean;
  @ViewChild('newName') newName: ElementRef;

  constructor(private listService: ListService) {      
      this.editFlag = false;
      this.over = false;
  }


  editTask() {
    this.editFlag = !this.editFlag;
  }

  sendTask() {
    this.task.name = this.newName.nativeElement.value;
    this.updateTask();
    this.editTask();
  }

  updateTask() {
    this.listService.updateList(this.list);
  }

  deleteTask() {
    let index = this.list.tasks.indexOf(this.task);
    this.list.tasks.splice(index, 1);

    this.listService.updateList(this.list);
  }

  mover() {
    this.over = true;
  }

  mout() {
    this.over = false;
  }

  

}
