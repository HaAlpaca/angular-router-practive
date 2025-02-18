import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, CanDeactivate } from "@angular/router";
import { filter, map, Observable, of, switchMap, startWith, take } from "rxjs";
import { CheckDeactivate } from "src/app/check-deactivate";
import { Article } from "src/app/models/articles";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article-detail-edit",
  template: `
    <p>Edit Article</p>
    <form *ngIf="form$ | async as form" [formGroup]="form">
      <label for="title">Title</label>
      <input type="text" id="title" formControlName="title" />
      <br />
      <label for="body">Body</label>
      <textarea id="body" formControlName="body"></textarea>
      <br />
    </form>
  `,
  styles: [],
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate {
  form$!: Observable<FormGroup>;
  private inititalFormValue: unknown;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.form$ = this.route.params.pipe(
      map((params) => params["slug"]),
      switchMap((slug) => this.articleService.getArticle(slug)),
      filter((article): article is Article => !!article), // Loại bỏ undefined
      switchMap((article) => of(this.initForm(article))),
      startWith(this.fb.group({ title: [""], body: [""] })) // Đảm bảo luôn có giá trị khởi tạo
    );
  }

  private initForm(article: Article) {
    const form = this.fb.group({
      title: [article.title],
      body: [article.body],
    });
    this.inititalFormValue = form.getRawValue();
    return form;
  }
  checkDeactivate(): Observable<boolean> {
    let formValue: unknown;
    this.form$
      .pipe(take(1))
      .subscribe((formvalue) => (formValue = formvalue.getRawValue()));
    const isEdited =
      JSON.stringify(formValue) !== JSON.stringify(this.inititalFormValue);
    return of(!isEdited || confirm("Are you sure you want to leave?"));
  }
}
