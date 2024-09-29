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
import {TeacherComponent} from "./teacher/teacher.component";
import {StudentComponent} from "./student/student.component";
import {AsignaturaComponent} from "./asignatura/asignatura.component";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ResetPasswordComponent,
    TeacherComponent,
    StudentComponent,
    AsignaturaComponent
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
