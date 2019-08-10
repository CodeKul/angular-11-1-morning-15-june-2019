import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './obs.service';
import { interval, Subscription } from 'rxjs'; // do not use intervals in component directly like this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private intSub: Subscription
  private mySub: Subscription

  title = 'http-observables' + 'slfvk'
  cnt = 50
  runner = 0

  constructor(
    private obs: ObsService
  ) {

  }

  ngOnInit() {

    this.mySub = this.obs.myObservable().subscribe(
      num => console.log(`Partial Progress ${num}`),
      err => console.log(`Recevived An Error ${err}`),
      () => console.log(`Processing Completed`)
    )

    this.intSub = interval(1000).subscribe(
      tick => this.runner = this.cnt - tick
    )
  }

  ngOnDestroy() {
    this.intSub.unsubscribe()
    this.mySub.unsubscribe()
  }
}
