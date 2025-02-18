import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleDetailsComponent } from "./article-details/article-details.component";
import { ArticlesGuard } from "../guards/articles.guard";
import { ArticleDetailEditComponent } from "./article-detail-edit/article-detail-edit.component";
import { NoArticleComponent } from "./no-article/no-article.component";
import { ArticleResolver } from "../resolvers/article.resolver";

const routes: Routes = [
  // {
  //   path: "articles",
  //   children: [
  //     { path: "", component: ArticleListComponent },
  //     { path: ":slug", component: ArticleDetailsComponent },
  //   ],
  // },
  { path: "", component: ArticleListComponent },
  { path: "no-article", component: NoArticleComponent },
  {
    path: ":slug",
    canActivateChild: [ArticlesGuard],
    children: [
      {
        path: "",
        component: ArticleDetailsComponent,
        resolve: {
          article: ArticleResolver,
        },
      },
      {
        path: "edit",
        component: ArticleDetailEditComponent,
        canDeactivate: [ArticlesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
