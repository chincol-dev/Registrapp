import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'path/to/your/json'; // Cambia por la ruta correcta o API

  constructor(private http: HttpClient) {}

  // Método para autenticar el usuario basado en email y contraseña
  authenticate(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
}
