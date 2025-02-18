import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { ArticleService } from "../../services/article.service";
import { filter, map, Observable, of, switchMap, take } from "rxjs";
import { Article } from "../../models/articles";
import { CheckDeactivate } from "src/app/check-deactivate";

@Component({
  selector: "app-article-details",
  template: `
    <p>article-details works!</p>
    <div *ngIf="article$ | async as article; else noArticle">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
    </div>
    <ng-template #noArticle>
      <p>No article found</p>
    </ng-template>
  `,
  styles: [],
})
export class ArticleDetailsComponent implements OnInit {
  article$!: Observable<Article | undefined>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.article$ = this.route.params.pipe(
      map((params) => params["slug"]),
      switchMap((slug) => this.articleService.getArticle(slug)),
      filter((article) => !!article)
    );
  }
}
