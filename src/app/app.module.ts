import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { NgxWebstorageModule } from 'ngx-webstorage';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'

import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/app.reducers';
import { UsersListEffects } from './store/effects/users-list.effects';
import { LoginEffects } from './store/effects/login.effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    HomeModule,
    CoreModule,
    LoginModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([UsersListEffects, LoginEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
