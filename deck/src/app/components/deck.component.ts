import { Component } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  cards: string[] = [];

  constructor() {
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const ranks = [
      '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(`${rank}_of_${suit}`);
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
