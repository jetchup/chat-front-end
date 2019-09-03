import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllChatsComponent } from './view/all-chats/all-chats.component';

const routes: Routes = [
  {
    path: 'all-chats',
    component: AllChatsComponent
  },
  {
    path: "", 
    redirectTo: '/all-chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
