import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/home/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { UserHasTokenGuard } from './core/guards/user-has-token.guard';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [UserHasTokenGuard],
  children: [{
    path: ':id',
    component: UserComponent
  }]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: '**',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
