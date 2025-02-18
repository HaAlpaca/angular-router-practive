import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ChildHomeComponent } from "./home/child-home/child-home.component";
import { ArticleDetailsComponent } from "./articles/article-details/article-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildHomeComponent,
    ArticleDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
