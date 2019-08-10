import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  constructor() { }

  myObservable(): Observable<number> {
    return new Observable(subscriber => {
      // sub function e.g for sending SMS

      for (let i = 0; i < 500; i++) {
        //
        subscriber.next(i)

        if (i == 10) {
          subscriber.error(new Error(`Reached to 10`))
        }
      }
      subscriber.complete()
    })
  }
}
