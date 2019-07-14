import { CstEv } from './../cst-al/cst-ev';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-al',
  templateUrl: './bg-al.component.html',
  styleUrls: ['./bg-al.component.css']
})
export class BgAlComponent implements OnInit {

  @Input()
  st : CstEv

  constructor() { }

  ngOnInit() {
  }
}
