import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'assets/services/auth/users.json';  // Cambia según tu ruta de JSON

  constructor(private http: HttpClient) {}

  // Autenticación simulada con un archivo JSON local
  authenticate(email: string, password: string): Observable<any> {
    return this.http.get(this.usersUrl).pipe(
        map((users: any) => {
          const user = users.find((u: any) => u.email === email && u.password === password);
          if (user) {
            return { success: true };
          } else {
            return { success: false };
          }
        })
    );
  }
}
