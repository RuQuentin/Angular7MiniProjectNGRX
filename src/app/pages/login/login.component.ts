import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Store } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { Login } from '../../store/actions/login.actions';

// import { LoginService } from '../login/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<IAppState>,
    // private loginService: LoginService
    ) {};

  ngOnInit() {
  }

  userEmail = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  userPassword = new FormControl('');
  matcher = new MyErrorStateMatcher();

  onLogIn(email, password) {
    this.store.dispatch(new Login({email, password}))
  }
}