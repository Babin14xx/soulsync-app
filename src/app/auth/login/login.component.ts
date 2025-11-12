import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.signIn(this.email, this.password)
      .then(res => {
        alert('Login Successful!');
        this.router.navigate(['/dashboard']); // redirect after login
      })
      .catch(err => alert(err.message));
  }
}
