import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { WaComponent } from './wa.component';
import { FbComponent } from './fb.component';

@NgModule({
  declarations: [ChatComponent, WaComponent, FbComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ChatModule { }
