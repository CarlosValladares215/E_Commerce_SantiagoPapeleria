import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

// COMPONENTES
import { ProductBreadcrumb } from './components/product-breadcrumb/product-breadcrumb';
import { ProductInfo } from './components/product-info/product-info';
import { ProductPrice } from './components/product-price/product-price';
import { ProductSpecs } from './components/product-specs/product-specs';
import { ProductReviews } from './components/product-reviews/product-reviews';
import { ProductStock } from './components/product-stock/product-stock';
import { ProductActions } from './components/product-actions/product-actions';
import { ProductGallery } from './components/product-gallery/product-gallery';
import { ProductRelated } from './components/product-related/product-related';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductBreadcrumb,
    ProductInfo,
    ProductPrice,
    ProductSpecs,
    ProductReviews,
    ProductStock,
    ProductActions,
    ProductGallery,
    ProductRelated
  ],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
})
export class Product {

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Producto ID:', id);
  }

  product = signal({
    id: 1,
    name: 'Calculadora Científica Casio FX-570',
    brand: 'Casio',
    category: 'Útiles Escolares',
    price: 18.90,
    originalPrice: 22.00,
    discount: 14,
    isOffer: true,
    isNew: false,
    stock: 15,
    description: 'Calculadora científica de alta precisión con más de 400 funciones, ideal para estudiantes de secundaria y universidad.',
    specs: [
      { label: 'Modelo', value: 'FX-570' },
      { label: 'Funciones', value: 'Más de 400 funciones científicas' },
      { label: 'Pantalla', value: 'LCD de alta resolución' },
      { label: 'Alimentación', value: 'Solar + batería' },
      { label: 'Marca', value: 'Casio' }
    ],
    images: [
      'assets/Filtro/oficina/img6.jpg'
    ],
    reviewsCount: 3,
    reviews: [
      { id: 1, user: 'María', rating: 5, comment: 'Muy completa, perfecta para mis clases.', date: '2024-01-05' },
      { id: 2, user: 'Jorge', rating: 4, comment: 'Funciona excelente, aunque un poco complicada al inicio.', date: '2024-01-12' },
      { id: 3, user: 'Ana', rating: 5, comment: 'La mejor calculadora científica que he tenido.', date: '2024-01-20' }
    ]
  });

  related = signal([
    {
      id: 2,
      name: 'Cuaderno Profesional 80 Hojas',
      brand: 'Tilibra',
      price: 2.10,
      originalPrice: 2.50,
      discount: 15,
      isOffer: true,
      image: '/assets/img/sample3.jpg',
      stock: 10,
      category: 'Útiles Escolares',
      isNew: false
    },
    {
      id: 3,
      name: 'Cuaderno Escolar 50 Hojas',
      brand: 'Stanford',
      price: 1.20,
      image: '/assets/img/sample4.jpg',
      stock: 50,
      category: 'Útiles Escolares',
      isNew: true
    }
  ]);

  categoryPath(category: string) {
    return '/categories/' + category.toLowerCase().replace(/\s+/g, '-');
  }
}
