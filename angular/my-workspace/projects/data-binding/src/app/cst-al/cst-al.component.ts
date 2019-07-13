import { CstEv } from './cst-ev';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cst-al',
  templateUrl: './cst-al.component.html',
  styleUrls: ['./cst-al.component.css']
})
export class CstAlComponent implements OnInit {

  @Input()
  txt: string

  @Output()
  alev: EventEmitter<CstEv> = new EventEmitter()

  curAlt: string

  alts = [
    `alert alert-info`,
    `alert alert-warning`,
    `alert alert-success`,
    `alert alert-danger`,
    `alert alert-primary`,
    `alert alert-secondary`
  ]

  constructor() {

  }

  ngOnInit() {
    this.curAlt = this.alts[1]
  }

  changeAlertState() {
    let sub = Math.floor(Math.random() * this.alts.length)
    this.curAlt = this.alts[sub]

    this.alev.emit({ type: this.curAlt })
  }
}
