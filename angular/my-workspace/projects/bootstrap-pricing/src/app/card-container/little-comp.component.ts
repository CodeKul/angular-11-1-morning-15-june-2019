import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-comp',
  template: `
    <p>
      little-comp works!
    </p>
  `,
  styles: []
})
export class LittleCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
