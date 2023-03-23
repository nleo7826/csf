import { Component, Input } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {

  @Input() 
  listTask: Task[] = [];
}
