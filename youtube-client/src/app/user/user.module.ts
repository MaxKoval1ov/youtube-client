import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './componets/user/user.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './componets/login-form/login-form.component';

@NgModule({
  declarations: [UserComponent, LoginFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [UserComponent, LoginFormComponent],
})
export class UserModule {}
