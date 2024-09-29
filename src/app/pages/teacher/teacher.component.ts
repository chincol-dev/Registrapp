import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AsignaturasService } from '../../services/asignaturas.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  asignaturas: any[] = [];

  constructor(
    private authService: AuthService,
    private asignaturasService: AsignaturasService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.authService.getLoggedInUser();
    if (!user || user.userType !== 'teacher') {
      alert("No tienes permisos para acceder a esta pagina.");
    }
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  seleccionarAsignatura(asignatura: any) {
    this.router.navigate(['/asignatura', asignatura.nombre]);
  }
}
