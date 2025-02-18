import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-no-article",
  template: ` <p>No Article Found!</p> `,
  styles: [],
})
export class NoArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
