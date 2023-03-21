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
    { img:'coke', description: 'Coca Cola', quantity: 0},
    { img:'sprite', description: 'Sprite', quantity: 0},
    { img:'green-tea', description: 'Pokka Green Tea', quantity: 0},
    { img:'100plus', description: '100 Plus', quantity: 0},
  ]

  @Output() 
  itemAdded = new Subject<Item>();

  addItemToCart($event: Item) {
    const item = $event;
    this.itemAdded.next(item);
    console.log('>>> addItemToCart: ', item.description, item.quantity);
  }
  
}
