import { MyValidator } from './my-val';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {

  prePop = {
    usNm: 'aflkkjzdlkv',
    pass: 'aodfjfj',
    eml: 'alkfj@sasladkvkj.co'
  }

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      usNm: this.fb.control('', Validators.compose([
        Validators.required, MyValidator.isStartFromA
      ])),
      email: this.fb.control('', Validators.compose([
        Validators.required, Validators.email
      ])),
      pass: this.fb.control('', Validators.required)
    })
  }

  onSub() {
    console.log(`Submitted`)
    console.log(this.fg)
  }
}
