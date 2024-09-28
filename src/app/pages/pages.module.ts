import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SharedModule} from "../shared/shared.module";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    RouterModule
  ]
})
export class PagesModule { }
