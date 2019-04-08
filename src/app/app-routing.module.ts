import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/home/user/user.component'
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [{
    path: ':id',
    component: UserComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
