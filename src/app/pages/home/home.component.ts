import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  loggedInUser: string | null = null;  // Variable para almacenar el usuario logueado

  constructor(private authService: AuthService, private router: Router) {}

  // Verificar el estado de autenticación al inicializar el componente
  ngOnInit() {
    const isLogged = this.authService.isLoggedIn();
    if (isLogged) {
      // Si está logueado, obtener el nombre del usuario
      this.loggedInUser = this.authService.getLoggedInUser();
    } else {
      // Si el usuario no está logueado, redirigir al login
      this.router.navigate(['/login']);
    }
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Redirigir al login después de cerrar sesión
  }
}
