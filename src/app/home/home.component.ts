import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Article } from "../models/articles";
import { ArticleService } from "../services/article.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  template: `
    <h1>Home with Featured Module</h1>
    <ul style="list-style: none;">
      <li
        *ngFor="let article of article$ | async"
        style="border: 1px solid black; padding: 20px"
      >
        {{ article.title }}
        <br />
        <a [routerLink]="['/detail', article.slug]">Read More</a>
        <br />
        <a (click)="routerNavigate(article.slug)"
          >Read More use navigate (click)</a
        >
      </li>
    </ul>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  article$!: Observable<Article[]>;
  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.article$ = this.articleService.articles$;
  }
  routerNavigate(slug: string) {
    this.router.navigate(["/detail", slug]);
  }
}
