import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from './url-const';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {

  constructor(
    private http: HttpClient
  ) { }

  listUsers(): Observable<Object> {
    return this.http.get(Urls.listUsers)
  }

  singleUser() {

  }

  createUser(usr: User): Observable<Object> {
    return this.http.post(
      Urls.createUser,
      usr, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
  }
}
