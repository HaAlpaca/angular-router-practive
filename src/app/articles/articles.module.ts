import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleDetailEditComponent } from "./article-detail-edit/article-detail-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ArticlesModule {}
