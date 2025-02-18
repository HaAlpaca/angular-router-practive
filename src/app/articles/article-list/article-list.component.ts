import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Article } from "src/app/models/articles";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article-list",
  template: ` <h1>Articles with Lazyloading Module</h1>
    <ul style="list-style: none;">
      <li
        *ngFor="let article of article$ | async"
        style="border: 1px solid black; padding: 20px"
      >
        {{ article.title }}
        <br />
        <a [routerLink]="['/articles', article.slug]">Read More</a>
        <a
          (click)="editArticle(article.slug)"
          style="margin-left: 20px,text-decoration: underline"
          >Edit</a
        >
        <br />
      </li>
    </ul>`,
  styles: [],
})
export class ArticleListComponent implements OnInit {
  article$!: Observable<Article[]>;
  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.article$ = this.articleService.articles$;
  }
  editArticle(slug: string) {
    this.router.navigate(["/articles", slug, "edit"]);
  }
}
