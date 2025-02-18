import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-home',
  template: `
    <p>
      child-home works!
    </p>
  `,
  styles: [
  ]
})
export class ChildHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
