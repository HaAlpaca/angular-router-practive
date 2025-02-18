import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ChildHomeComponent } from "./home/child-home/child-home.component";
import { ArticleDetailsComponent } from "./articles/article-details/article-details.component";
import { ArticlesGuard } from "./guards/articles.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "detail/:slug",
    component: ArticleDetailsComponent,
  },
  {
    path: "articles",
    loadChildren: () =>
      import("./articles/articles.module").then((m) => m.ArticlesModule),
    canActivate: [ArticlesGuard],
    // canLoad: [ArticlesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
