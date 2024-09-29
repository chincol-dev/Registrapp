import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from '../../services/asignaturas.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.scss'],
})
export class AsignaturaComponent implements OnInit {
  nombreAsignatura:string | null = null;
  fecha: string | null = null;
  hora: string | null = null;
  aula: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private asignaturasService: AsignaturasService
  ) {}

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    const asignatura = this.asignaturasService.getAsignaturas().find(a => a.nombre === nombre);
    if (asignatura) {
      this.nombreAsignatura = asignatura.nombre;
      this.fecha = asignatura.fecha;
      this.hora = asignatura.hora;
      this.aula = asignatura.aula;
    }
  }
  generarQR() {
    // Implement QR generation logic here
    console.log('Generar QR button clicked');
  }
}
