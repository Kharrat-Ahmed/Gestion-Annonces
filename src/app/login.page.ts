// login.page.ts

import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  current :any
  constructor(private userService: UserService,public fb:AuthService, private auth: AngularFireAuth,private router: Router) {}
  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        // Si un utilisateur est connecté, mettre à jour les données utilisateur et les stocker localement
        this.current = user;
       if(this.current){
        this.router.navigate(['/home']);
       }
      }
    });
 }
  loginFire(){
  this.fb.loginWithEmail(this.username,this.password).then((res)=>{
    this.router.navigate(['/home']);
  }).catch((err)=>{
   alert(err)
  })
  }
  login(): void {
    this.userService.authenticate(this.username, this.password).subscribe((success) => {
      if (success) {
        // Redirect to a protected page (e.g., home) after successful login
        this.router.navigate(['/home']);
      } else {
        // Show an error message or handle unsuccessful login
      }
    });
  }
}
