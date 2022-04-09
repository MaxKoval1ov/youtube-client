import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { LoginFormComponent } from './componets/login-form/login-form.component';
import { RegisterFormComponent } from './componets/register-form/register-form.component';
import { UserComponent } from './componets/user/user.component';

@NgModule({
  declarations: [UserComponent, RegisterFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [UserComponent, RegisterFormComponent, LoginFormComponent],
})
export class UserModule {}
