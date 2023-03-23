import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: any;
  form!: FormGroup

  tasks: Task[] = [];

  onNewTask(task: Task) {
    this.tasks.push(task);
  }
}
