import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'examples';

  myObservable: Observable<number>;
  emittedValues: number[] = [];

  constructor() {
    this.myObservable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    });

    this.myObservable.subscribe(value => {
      this.emittedValues.push(value);
      console.log(value)
    });
  }
}
