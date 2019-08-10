import { Component } from '@angular/core';
import { ObsService } from './obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-observables' + 'slfvk'
  constructor(
    private obs: ObsService
  ) {
    this.obs.myObservable().subscribe(
      num => console.log(`Partial Progress ${num}`),
      err => console.log(`Recevived An Error ${err}`),
      () => console.log(`Processing Completed`)
    )
  }
}
