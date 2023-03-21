import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { News } from './models';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ng-newsapi';
  form!: FormGroup
  news: News[] = []
  news$!: Observable<News[]>

  constructor(private fb: FormBuilder, private newsSvc: NewsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      country: this.fb.control('', [ Validators.required ]),
      category: this.fb.control('', [ Validators.required ])
    })
  }

  getNews() {
    const country = this.form.value.country
    const category = this.form.value.category
    console.info('>>> country: ', country)
    console.info('>>> category: ', category)
    this.newsSvc.getNews(country, category)

  }
}
