import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { delay, Observable, of, tap } from "rxjs";
import { Article } from "../models/articles";
import { ArticleService } from "../services/article.service";

@Injectable({
  providedIn: "root",
})
export class ArticleResolver implements Resolve<Article | undefined> {
  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Article | undefined> {
    const slug = route.paramMap.get("slug");
    if (!slug) {
      this.redirectToNoArticle();
      return of(undefined);
    }
    return this.articleService.getArticle(slug).pipe(
      delay(2000),
      tap((article) => {
        if (!article) {
          this.redirectToNoArticle();
        }
      })
    );
  }
  private redirectToNoArticle() {
    this.router.navigate(["/articles/no-article"]);
  }
}
