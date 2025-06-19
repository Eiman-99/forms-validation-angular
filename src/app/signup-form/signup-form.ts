import { Component } from '@angular/core';
import { ReactiveFormsModule,NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss'
})
export class SignupForm {
registerForm!: FormGroup;

ngOnInit(){
  this.registerForm = new FormGroup({
  name: new FormControl("", [Validators.required]),
  email: new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  ]),
  username: new FormControl("", [Validators.required, Validators.pattern(/^\S+$/)]),
  password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&%#]).+$/)])
});

}

submit(){
  console.log(this.registerForm.value)
}
}
