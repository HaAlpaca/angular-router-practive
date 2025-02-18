import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleDetailEditComponent } from "./article-detail-edit/article-detail-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoArticleComponent } from './no-article/no-article.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailEditComponent, NoArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ArticlesModule {}
