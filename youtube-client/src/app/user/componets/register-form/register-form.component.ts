import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  registrationForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    password: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ],
    ],
    passwordRep: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ],
    ],
    gender: ['male', Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(
      this.registrationForm.controls['email'].errors,
      this.registrationForm.controls['email'].invalid,
    );
  }
}
