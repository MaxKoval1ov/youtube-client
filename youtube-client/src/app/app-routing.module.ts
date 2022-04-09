import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/components/search/search.component';
import { LoginFormComponent } from './user/componets/login-form/login-form.component';
import { RegisterFormComponent } from './user/componets/register-form/register-form.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
