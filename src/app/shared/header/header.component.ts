// header.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.userEmail = this.authService.getLoggedInUser()?.email || null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
