import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task.component';
import { ListTasksComponent } from './components/list-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTasksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
