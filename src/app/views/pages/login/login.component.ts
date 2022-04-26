import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = ""
  constructor(private userService: UserService,
    private router: Router) { }

  login(){
    if(this.username == "mani"){
      localStorage.setItem('user', this.username);
      this.userService.setLoggedIn();
      this.router.navigate(['/docs']);
    }
  }

}
