import { Component } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'day31-ws';
  cart: Item[] = [];

  updatedItem(item: Item) {
    console.log('>>> updatedItem: ', item.description, item.quantity);
    const index = this.cart.findIndex(i => i.description === item.description);
    if (index === -1) {
      this.cart.push(item);
    }
    item.quantity++;
  }

}


