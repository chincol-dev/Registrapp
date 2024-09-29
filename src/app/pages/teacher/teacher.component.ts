import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent  implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getLoggedInUser();
    if (!user || user.userType !== 'teacher') {
      alert("No tienes permisos para acceder a esta pagina.");
    }
  }
}
