import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    {email: 'usuario1@example.com', password: '12345', userType: 'student'},
    {email: 'usuario2@example.com', password: 'abcde', userType: 'teacher'},
  ];

  private loggedInUser: { password: string; userType: string; email: string } | null = null;

  constructor() {
  }

  authenticate(email: string, password: string): { success: boolean, message: string } {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.loggedInUser = user;
      return {success: true, message: 'Login exitoso'};
    } else {
      return {success: false, message: 'Email o contraseña incorrecta'};
    }
  }

  // Método para verificar si hay un usuario logueado
  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  // Obtener el nombre de usuario logueado
  getLoggedInUser(): { password: string; userType: string; email: string } | null {
    return this.loggedInUser;
  }

  // Método para cerrar sesión
  logout(): void {
    this.loggedInUser = null;
  }
}
