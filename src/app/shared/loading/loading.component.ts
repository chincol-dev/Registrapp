import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  @Input() isLoading: boolean = false; // Controla si se muestra la carga
  @Input() message: string = 'Cargando...'; // Mensaje personalizable
  @Input() duration: number = 3000; // Duración predeterminada

  constructor() { }

  ngOnInit() {
    if (this.isLoading) {
      this.startLoading();
    }
  }

  startLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, this.duration); // Tiempo de duración de la animación
  }

}
