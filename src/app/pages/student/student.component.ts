import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent  implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getLoggedInUser();
    if (!user || user.userType !== 'student') {
      alert("No tienes permisos para acceder a esta pagina.");
    }
  }
  generateQR() {
    alert("QR escaneado");
  }

}
