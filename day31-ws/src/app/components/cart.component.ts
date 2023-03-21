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
      if (item.quantity === 0) {
        this.cart.splice(this.cart.indexOf(item), 1);
      }
    } 
    console.log('>>> removeItemFromCart: ', item.description, item.quantity);
  }

}
