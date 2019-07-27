import { ProgressService } from './progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `
  <div class="progress">
    <div class="progress-bar" [attr.role]="'progressbar'" [style.width.%]="prog"
     [attr.aria-valuenow]="25" [attr.aria-valuemin]="0" [attr.aria-valuemax]="100">
    </div>
  </div>
  `,
  styles: []
})
export class ProgressComponent implements OnInit {

  prog: number = 0
  constructor(
    private progress: ProgressService
  ) { }

  ngOnInit() {
    this.progress.onProgress(ksjdajdf => {
      this.prog = ksjdajdf
    })
  }
}
