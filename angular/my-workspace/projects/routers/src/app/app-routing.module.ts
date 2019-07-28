import { FbComponent } from './chat/fb.component';
import { WaComponent } from './chat/wa.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './chat/login.guard';

const chatRoutes = [
  { path: 'wa', component: WaComponent },
  { path: 'fb', component: FbComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'chat/:mob', component: ChatComponent, children: chatRoutes, canActivate: [LoginGuard] },
  { path: 'chat', redirectTo: 'chat/298573987' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
