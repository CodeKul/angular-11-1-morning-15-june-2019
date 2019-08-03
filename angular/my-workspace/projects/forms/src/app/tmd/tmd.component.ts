import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tmd',
  templateUrl: './tmd.component.html',
  styleUrls: ['./tmd.component.css']
})
export class TmdComponent implements OnInit {

  emRg = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+"
  
  prePop = {
    usNm : '',
    pass : '',
    email : ''
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
