import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.signUp(this.email, this.password)
      .then(res => {
        alert('Registration Successful!');
        this.router.navigate(['/login']);
      })
      .catch(err => alert(err.message));
  }
}
