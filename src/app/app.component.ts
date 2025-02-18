import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <span style="display: block">{{ title }} app is running!</span>
    <ul>
      <li>
        <a [routerLink]="['/articles']"
          >Go to route Articles with Lazy Loading</a
        >
      </li>
      <li>
        <a [routerLink]="['/home']">Go to Home with Featured Module</a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-router";
}
