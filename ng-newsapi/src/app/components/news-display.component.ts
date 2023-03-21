import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { News } from 'src/app/models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent {

  news$!: Observable<News[]>
  news: News[] = []
  newsSub!: Subscription

  constructor(private newsSvc: NewsService) { }

  ngOnInit(): void {
    console.info('>> subscribing to news')
    this.newsSub = this.newsSvc.onNews.subscribe(
      (data) => this.news = data
    )
  }

  ngOnDestroy(): void {
      this.newsSub.unsubscribe()
  }
}
