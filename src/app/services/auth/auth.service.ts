import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private users = [
        { email: 'usuario1@example.com', password: '12345' },
        { email: 'usuario2@example.com', password: 'abcde' }
    ];

    private loggedInUser: string | null = null;

    constructor() {}

    authenticate(email: string, password: string): { success: boolean, message: string } {
        const user = this.users.find(u => u.email === email && u.password === password);

        if (user) {
            this.loggedInUser = email;
            return { success: true, message: 'Login exitoso' };
        } else {
            return { success: false, message: 'Email o contraseña incorrecta' };
        }
    }

    // Método para verificar si hay un usuario logueado
    isLoggedIn(): boolean {
        return this.loggedInUser !== null;
    }

    // Obtener el nombre de usuario logueado
    getLoggedInUser(): string | null {
        return this.loggedInUser;
    }

    // Método para cerrar sesión
    logout(): void {
        this.loggedInUser = null;
    }
}
