import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {

  isMobileMenuOpen = signal(false);
  isCategoriesOpen = signal(false);
  isProfileMenuOpen = signal(false);

  constructor(
    public auth: AuthService,   // 🔥 acceso a user() e isAuthenticated()
    private router: Router
  ) {}

  categories = [
    { name: 'Útiles Escolares', icon: 'ri-pencil-line', count: '12,500', path: '/categories/utiles-escolares' },
    { name: 'Suministros de Oficina', icon: 'ri-briefcase-line', count: '8,900', path: '/categories/suministros-oficina' },
    { name: 'Tecnología', icon: 'ri-computer-line', count: '3,200', path: '/categories/tecnologia' },
    { name: 'Arte y Manualidades', icon: 'ri-palette-line', count: '6,800', path: '/categories/arte-manualidades' },
    { name: 'Mobiliario', icon: 'ri-home-office-line', count: '2,100', path: '/categories/mobiliario' },
    { name: 'Limpieza', icon: 'ri-drop-line', count: '1,500', path: '/categories/limpieza' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  openCategories() {
    this.isCategoriesOpen.set(true);
  }

  closeCategories() {
    this.isCategoriesOpen.set(false);
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen.update(v => !v);
  }

  logout() {
    this.auth.logout();
    this.isProfileMenuOpen.set(false);
    this.router.navigate(['/']);
  }
}
