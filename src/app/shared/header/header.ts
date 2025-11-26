import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {

  // STATE (signals)
  isMobileMenuOpen = signal(false);
  isCategoriesOpen = signal(false);
  isProfileMenuOpen = signal(false);

  // SEARCH BAR
  searchQuery = signal('');

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  // CATEGORIES LIST (dropdown)
  categories = [
    { name: 'Útiles Escolares', icon: 'ri-pencil-line', count: '12,500', path: '/categories/utiles-escolares' },
    { name: 'Suministros de Oficina', icon: 'ri-briefcase-line', count: '8,900', path: '/categories/suministros-oficina' },
    { name: 'Tecnología', icon: 'ri-computer-line', count: '3,200', path: '/categories/tecnologia' },
    { name: 'Arte y Manualidades', icon: 'ri-palette-line', count: '6,800', path: '/categories/arte-manualidades' },
    { name: 'Mobiliario', icon: 'ri-home-office-line', count: '2,100', path: '/categories/mobiliario' },
  ];

  /* ========== MOBILE MENU ========== */
  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  /* ========== PROFILE MENU ========== */
  toggleProfileMenu() {
    this.isProfileMenuOpen.update(v => !v);
  }

  closeProfileMenu() {
    this.isProfileMenuOpen.set(false);
  }

  logout() {
    this.auth.logout();
    this.closeProfileMenu();
    this.router.navigate(['/']);
  }

  /* ========== CATEGORY MENU DROPDOWN ========== */
  toggleCategories() {
    this.isCategoriesOpen.update(v => !v);
  }

  closeCategories() {
    this.isCategoriesOpen.set(false);
  }

  /* ========== SEARCH BAR (global) ========== */
  performSearch() {
    const q = this.searchQuery().trim();
    if (!q) return;

    // Redirect to products with search query
    this.router.navigate(['/products'], {
      queryParams: { search: q }
    });

    this.closeMobileMenu();
  }
}
