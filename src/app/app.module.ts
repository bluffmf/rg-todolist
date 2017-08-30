import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { NoteComponent } from './components/note/note.component';
import { TaskComponent } from './components/task/task.component';
import { NoteService }          from './services/note.service';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    TaskComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
