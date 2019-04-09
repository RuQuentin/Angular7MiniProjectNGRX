import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../../pages/login/login.service'

@Injectable()
export class UserHasTokenGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}
  
  canActivate() {
    if(this.loginService.getToken()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}
