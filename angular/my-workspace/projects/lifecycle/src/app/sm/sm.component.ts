import { Component, Input, SimpleChanges } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css']
})
export class SmComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  dt: string

  constructor() { }

  ngOnChanges(ch: SimpleChanges) { console.log(`ngOnChanges`, ch) }

  ngOnInit() { console.log(`ngOnInit`) }

  ngDoCheck() { console.log(`ngDoCheck`) }

  ngAfterContentInit() { console.log(`ngAfterContentInit`) }

  ngAfterContentChecked() { console.log(`ngAfterContentChecked`) }

  ngAfterViewInit() { console.log(`ngAfterViewInit`) }

  ngAfterViewChecked() { console.log(`ngAfterViewChecked`) }

  ngOnDestroy() { console.log(`ngOnDestroy`) }

}
