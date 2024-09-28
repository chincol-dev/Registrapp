import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';  // Variable para mostrar errores

  constructor(private authService: AuthService, private router: Router) {}

  // Método para manejar el login
  login() {
    const response = this.authService.authenticate(this.email, this.password);

    if (response.success) {
      // Redirigir a la página de QR si el login es exitoso
      this.router.navigate(['/home']);
    } else {
      // Mostrar el mensaje de error
      this.loginError = response.message;
    }
  }

  // Método para restablecer la contraseña (opcional)
  resetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
