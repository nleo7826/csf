import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards.component';
import { HandComponent } from './components/hand.component';
import { DeckComponent } from './components/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HandComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
