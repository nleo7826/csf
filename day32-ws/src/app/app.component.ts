import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form!: FormGroup

  tasks: Task[] = [];
  title: any;

  onNewTask(task: Task) {
    this.tasks.push(task);
  }
}
