import { Injectable } from "@angular/core";
import { News } from "./models";
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, Observable, Subject } from "rxjs";

const NEWS_URL = "https://newsapi.org/v2/top-headlines"
const API_KEY = 'ce5a6263cd9e4068bd8dca2d8fc68c68'

@Injectable()
export class NewsService {

    onNews = new Subject<News[]>
  
    constructor(private http: HttpClient) { }
  
    getNewsAsObservable(country: string, category: string): Observable<News[]> {
      const params = new HttpParams()
          .set('country', country)
          .set('category', category)
          .set('apiKey', API_KEY)
  
      return this.http.get<News[]>(NEWS_URL, { params })
          .pipe()
    }
  
    //this does not work
    getNews(country: string, category: string): Promise<News[]> {
      return firstValueFrom(
        this.getNewsAsObservable(country, category)
      )
      .then((data: any) => {
        const w = data['news'] as News[]
        return w
      })
      .then(data => {
        this.onNews.next(data)
        return data
      })
    }
  
}