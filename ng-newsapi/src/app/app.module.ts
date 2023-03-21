import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsDisplayComponent } from './components/news-display.component';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsDisplayComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
