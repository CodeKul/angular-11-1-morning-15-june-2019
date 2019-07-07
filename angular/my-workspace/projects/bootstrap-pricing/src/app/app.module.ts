import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricingNavComponent } from './pricing-nav/pricing-nav.component';
import { TitleInfoComponent } from './title-info/title-info.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { OneCardComponent } from './card-container/one-card/one-card.component';
import { OneFooterComponent } from './footer-container/one-footer/one-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingNavComponent,
    TitleInfoComponent,
    CardContainerComponent,
    FooterContainerComponent,
    OneCardComponent,
    OneFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
