import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '../../services/asignaturas.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  asignaturas: any[] = [];

  constructor(private asignaturasService: AsignaturasService) {}

  ngOnInit() {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }
  escanearQR(asignatura: any) {
    // Implement QR scanning logic here
    console.log('Escanear QR button clicked for', asignatura.nombre);
  }
}
