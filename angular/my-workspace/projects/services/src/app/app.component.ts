import { ThreeService } from './three.service';
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'services';
  cnt = 0

  constructor(
    private three: ThreeService
  ) { }
}
