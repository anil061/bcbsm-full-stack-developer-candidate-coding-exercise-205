import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: String = 'user';
  password: String = 'admin';
  isValid: boolean;
  constructor(private router: Router) {
    this.isValid = false;
  }
  
    // You can implement authentication logic here.
    login() {
      if (this.username =="user" && this.password == "admin") {

         this.router.navigate(['/email']);
       } else {
        console.log("Authentication failed");
       }
    }
}
