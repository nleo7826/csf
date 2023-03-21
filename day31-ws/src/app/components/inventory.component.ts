import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Input()
    items: Item[] = [ 
    { description: 'Item 1', quantity: 0},
    { description: 'Item 2', quantity: 0}
  ]

  @Output() 
  itemAdded = new Subject<Item>();

  addItemToCart($event: Item) {
    const item = $event;
    this.itemAdded.next(item);
    console.log('>>> addItemToCart: ', item.description, item.quantity);
  }
  
}
