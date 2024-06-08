import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private route = inject(Router);
  userName: string = '';



  login(){
    localStorage.setItem('user', this.userName);
    this.route.navigate(['home']);
  }
}
