import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductInfoData {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  stock: number;
  category: string;
  isNew: boolean;
  description?: string;
}

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.html',
  styleUrls: ['./product-info.scss'],
})
export class ProductInfo {
  @Input() product!: ProductInfoData;

  /** Estado de stock según React */
  get stockStatus(): 'in' | 'low' | 'out' {
    if (this.product.stock === 0) return 'out';
    if (this.product.stock > 0 && this.product.stock < 10) return 'low';
    return 'in';
  }

  /** Texto dinámico para el stock */
  get stockText(): string {
    if (this.product.stock === 0) return 'Agotado';
    if (this.product.stock < 10) return `Solo ${this.product.stock} disponibles`;
    return 'En stock';
  }

  /** Mostrar descripción fallback si no existe */
  get safeDescription(): string {
    return (
      this.product.description ||
      'Este producto es parte de nuestro catálogo oficial. Detalles adicionales próximamente.'
    );
  }
}
