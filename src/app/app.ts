import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { SignupForm } from './signup-form/signup-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginForm, SignupForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LoginSignupForms';
  toggle:boolean=true;

  renderLogin(){
    this.toggle=true;
  }

  renderSignup(){
    this.toggle=false;
  }
}
