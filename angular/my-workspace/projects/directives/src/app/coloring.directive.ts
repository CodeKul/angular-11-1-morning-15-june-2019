import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColoring]'
})
export class ColoringDirective implements OnInit {

  @Input('appColoring')
  @HostBinding('style.background')
  bakCol : string

  constructor(
    private elRf: ElementRef,
    private rend : Renderer2
  ) { }

  ngOnInit() {
    // this.elRf.nativeElement.style.background = 'red' // dont

    // this.rend.setStyle(this.elRf.nativeElement, 'background', 'yellow') //do

   // this.bakCol = 'red'
  }

  @HostListener('mouseenter')
  onIn() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    this.bakCol = `rgb(${r}, ${g}, ${b})`
  }
}
