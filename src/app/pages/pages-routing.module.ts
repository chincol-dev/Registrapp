import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
