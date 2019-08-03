import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tmd',
  templateUrl: './tmd.component.html',
  styleUrls: ['./tmd.component.css']
})
export class TmdComponent implements OnInit {

  prePop = {
    usNm : 'android',
    pass : 'java',
    email : 'a@a.com'
  }
  constructor() { }

  ngOnInit() {
  }

  onSub(frm: NgForm) {
    console.log(frm)
    console.log(frm.value)
    console.log(this.prePop)
  }
}
