import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

  @Input('appUnless')
  isSh: boolean

  constructor(
    private vcRef: ViewContainerRef,
    private tmRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    if (!this.isSh) {
      this.vcRef.createEmbeddedView(this.tmRef)
    } else {
      this.vcRef.clear()
    }
  }
}
