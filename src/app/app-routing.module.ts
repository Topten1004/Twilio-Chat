import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatsComponent } from './pages/chats/chats.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/chats' },
  { path: 'chats', component : ChatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
