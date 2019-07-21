import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  mobiles = [
    { name: 'android', company: 'Google' },
    { name: 'ios', company: 'Apple' },
    { name: 'RIM', company: 'BB' },
    { name: 'mango', company: 'Microsoft' },
    { name: 'Tizen', company: 'Samsung' }
  ]
}
