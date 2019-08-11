import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './obs.service';
import { interval, Subscription } from 'rxjs'; // do not use intervals in component directly like this
import { ReqResService } from './req-res.service';
import { User, UserCreateRes, ListUserRes } from './user';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private intSub: Subscription
  private mySub: Subscription
  isUsSuc = false
  isErr = false

  title = 'http-observables' + 'slfvk'
  cnt = 50
  runner = 0

  listUsrRes: ListUserRes

  constructor(
    private obs: ObsService,
    private reqRes: ReqResService
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

  onCreateUser(usr: User) {
    console.log(usr)
    this.reqRes.createUser(usr).subscribe(
      res => {
        let resObj: UserCreateRes = res as UserCreateRes
        this.isUsSuc = true
        this.isErr = false
      },
      err => this.isUsSuc = this.isErr = false,
      () => console.log(`Request and response completeds`)
    )
  }
  onListUsers() {
    this.reqRes.listUsers().subscribe(
      res => {
        console.log(res)
        this.listUsrRes = res as ListUserRes
      }
    )
  }
}
