import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserHasTokenGuard } from './guards/user-has-token.guard'


// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    // FormsModule
  ],
  providers: [
    UserHasTokenGuard
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    // FormsModule
  ]
})
export class CoreModule { }