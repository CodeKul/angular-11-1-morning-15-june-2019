import { Injectable } from '@angular/core';
import { OneService } from './one.service';
import { TwoService } from './two.service';

@Injectable({ providedIn: 'root' })
export class ThreeService {

  constructor(
    private one: OneService,
    private two: TwoService
  ) { }
}
