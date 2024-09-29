import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private asignaturas = [
    {nombre:'Programacion ',fecha:'2024-09-31',hora:'10:00',aula:'Aula 1'},
    {nombre:'Matematicas',fecha:'2024-09-31',hora:'10:00',aula:'Aula 2'},]

  constructor() { }

  getAsignaturas(){
    return this.asignaturas;
  }
}
