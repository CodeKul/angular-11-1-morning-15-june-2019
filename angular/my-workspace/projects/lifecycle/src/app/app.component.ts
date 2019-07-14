import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  dtNow : string
  isVs: boolean = false
  date()  {
    this.dtNow = Date.now().toString()
  }
}