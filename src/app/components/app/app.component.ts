import { Component } from '@angular/core';
import { ListModel } from './../../models/list.model';
import { ListService } from './../../services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'Todo';
  lists: ListModel[];
  busy: Promise<any>;

  constructor(private listService: ListService) {  }

  ngOnInit() {
    this.busy = this.listService.getLists()
      .then(lists => this.lists = lists);

    this.listService.changedList.subscribe(
      () => {
        this.busy = this.listService.getLists()
          .then(lists => this.lists = lists);
      }
    );
  
  }

  addList() {    
    this.listService.addList();
  }

}
