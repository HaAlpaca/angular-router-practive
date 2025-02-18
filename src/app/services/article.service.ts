import { Injectable } from "@angular/core";
import { map, Observable, of, shareReplay } from "rxjs";
import { Article } from "../models/articles";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor() {}
  get articles$(): Observable<Article[]> {
    return of<Article[]>([
      {
        title: "Title 1",
        body: "Angular Router is a routing library for Angular",
        slug: "title-1",
      },
      {
        title: "Title 2",
        body: "Angular is a TypeScript-based open-source front-end web framework mainly maintained by Google",
        slug: "title-2",
      },
    ]).pipe(shareReplay(1));
  }
  getArticle(slug: string) {
    return this.articles$.pipe(
      map((articles) => articles.find((a) => a.slug === slug))
    );
  }
}
