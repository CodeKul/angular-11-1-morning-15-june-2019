import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CstAlComponent } from './cst-al/cst-al.component';
import { BgAlComponent } from './bg-al/bg-al.component';

@NgModule({
  declarations: [
    AppComponent,
    CstAlComponent,
    BgAlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
