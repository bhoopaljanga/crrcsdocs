import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class UserService {
    _loggedIn = false;
    isLoggedIn(){
        return this._loggedIn || localStorage.getItem('user');

    }

    setLoggedIn(){
        this._loggedIn = true;
    }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {  
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    console.log("OnlyLoggedInUsers");
    
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
     this.router.navigate(['login'])
      return false;
    }
  }
}