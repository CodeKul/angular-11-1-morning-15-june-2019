import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TmdComponent } from './tmd/tmd.component';
import { DdComponent } from './dd/dd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TmdComponent,
    DdComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule,
    Ng2SmartTableModule,
    FormsModule, // template driven
    ReactiveFormsModule // data driven
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
