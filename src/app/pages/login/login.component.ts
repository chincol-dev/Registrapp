import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';  // Variable para mostrar errores
  isLoading: boolean = false;  // Variable para controlar el estado del loader

  constructor(private authService: AuthService, private router: Router) {}

  // Método para manejar el login
  login() {
    // Mostrar el loader cuando el usuario intenta iniciar sesión
    this.isLoading = true;

    // Simular el proceso de autenticación (esto puede ser una llamada a una API)
    setTimeout(() => {
      const response = this.authService.authenticate(this.email, this.password);

      if (response.success) {
        // Simular un pequeño retraso para mostrar la animación de carga antes de redirigir
        setTimeout(() => {
          this.isLoading = false;  // Ocultar el loader
          if (this.authService.getLoggedInUser()?.userType === 'student') {
            this.router.navigate(['/student']);  // Redirigir a la página principal
          } else {
            this.router.navigate(['/teacher']);  // Redirigir a la página principal
          }
        }, 2000);  // Espera 2 segundos antes de redirigir
      } else {
        // Si hay un error, mostrar el mensaje de error y ocultar el loader
        this.isLoading = false;
        this.loginError = response.message;
      }
    }, 1000); // Simular tiempo de autenticación (puedes ajustar este valor)
  }
}
