import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css'],
  // providers: [DataService]
})
export class SmComponent implements OnInit {

  cnt = 0
  constructor(
    private data: DataService
  ) {

  }
  ngOnInit() {
  }

  onBtn() {
    this.cnt = this.data.cnt++
  }

}
