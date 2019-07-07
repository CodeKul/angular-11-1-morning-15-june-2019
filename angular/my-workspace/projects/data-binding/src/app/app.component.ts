import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to codekul';
  type = 'button'
  isInf = false
  rnCl: string = 'rgb(255,0,0)'

  stl = {
    border: '1px solid green',
    width: '200px'
  }

  abcPqr() {
    this.isInf = !this.isInf
    console.log(`Button Clicked ${this.isInf}`)
  }

  onKeyHit(ev: any) {
    this.rnCl = this.randomColor()
  }

  randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
  }
}
