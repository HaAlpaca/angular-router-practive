import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { ArticleService } from "../../services/article.service";
import { delay, filter, map, Observable, of, switchMap, take } from "rxjs";
import { Article } from "../../models/articles";
import { CheckDeactivate } from "src/app/check-deactivate";

@Component({
  selector: "app-article-details",
  template: `
    <p>article-details works!</p>
    <div *ngIf="article$ | async as article; else Loading">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
    </div>
    <ng-template #Loading>
      <p>Loading...</p>
    </ng-template>
  `,
  styles: [],
})
export class ArticleDetailsComponent implements OnInit {
  article$!: Observable<Article | undefined>;
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.article$ = this.route.data.pipe(map((data) => data["article"]));
  }
}
