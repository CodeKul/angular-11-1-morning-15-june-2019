import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-panel',
  template: `
    <input type="button" value="-" class="m-1 btn btn-warning" (click)="btnClk(1)">
    <input type="button" value="+" class="m-1 btn btn-info" (click)="btnClk(2)">
  `,
  styles: []
})
export class PanelComponent implements OnInit {

  constructor(
    private progress : ProgressService
  ) { }

  ngOnInit() {
  }

  btnClk(btn: number) {
    if(btn == 1) {
      // -
      this.progress.minus()
    }else {
      // +
      this.progress.plus()
    }
  }
}
