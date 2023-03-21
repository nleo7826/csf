import { Component, Input } from '@angular/core';
import { Item } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cart: Item[] = [];

  removeItemFromCart(item:Item) {
    if (item.quantity > 0) {
      item.quantity--;
      console.log('>>> removeItemFromCart: ', item.description, item.quantity);
    } else {
      const index = this.cart.findIndex(i => i.description === item.description);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  
  
}
