
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit, OnChanges{

  form!: FormGroup

  @Output()
  onNewTask = new Subject<Task>()

  @Input()
  task: Task | null = null

  get value(): Task {
    return this.form.value as Task
  }

  get invalid(): boolean {
    return this.form.invalid
  }

  constructor(private fb: FormBuilder) { }

  processForm() {
    
    const taskCtrl = this.form.get('task') as FormControl
    const task0 = taskCtrl.value

    //validate task
    if (taskCtrl.valid) {
      const value: Task = this.form.value

      this.form.reset()

      this.onNewTask.next(value)

      console.info(`task0 = ${task0}`)
      console.info('task1 = ', value)
    }
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      task: this.fb.control<string>('', [ Validators.required, Validators.minLength(2) ]),
      priority: this.fb.control<string>('', [ Validators.required]),
      due: this.fb.control('', [ Validators.required ])
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    //can validate single controls here
    const t: Task = changes['task'].currentValue
    const taskCtrl = this.form.get('task') as FormControl
    const priorityCtrl = this.form.get('priority') as FormControl
    const dueCtrl = this.form.get('due') as FormControl

    taskCtrl.setValue(t.task)
    priorityCtrl.setValue(t.priority)
    dueCtrl.setValue(t.due)

    //doesn't log changes
    console.info('changes: ', changes)
  }
}
