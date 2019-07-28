import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mobNum: string
  options = [
    'wa', 'fb', 'g+', 'insta', 'sc', 'wc'
  ]
  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(prm => {
      console.log(prm)
      this.mobNum = prm['mob']
    })

    this.actRt.queryParams.subscribe(prm => {
      console.log(prm)
    })
  }
}
