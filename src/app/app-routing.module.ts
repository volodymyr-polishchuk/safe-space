import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SelectCategoryComponent} from './pages/select-category/select-category.component';
import {SelectPsychologistComponent} from './pages/select-psychologist/select-psychologist.component';
import {ChatComponent} from './pages/chat/chat.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'category', component: SelectCategoryComponent },
  { path: 'psychologist', component: SelectPsychologistComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chat/:key', component: ChatComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
