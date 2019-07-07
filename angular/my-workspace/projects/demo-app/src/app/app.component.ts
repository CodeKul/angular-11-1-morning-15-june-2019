import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  constructor(injector: Injector) {
    const MyNavElement = createCustomElement(NavBarComponent, { injector });
    customElements.define('codekul-nav', MyNavElement);
  }
}
