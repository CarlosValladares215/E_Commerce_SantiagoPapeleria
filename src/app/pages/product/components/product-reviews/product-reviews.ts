import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductReview {
  id: number;
  user: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO o texto
}

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-reviews.html',
  styleUrls: ['./product-reviews.scss'],
})
export class ProductReviews {
  @Input() reviews: ProductReview[] = [];

  // Promedio de calificación
  avgRating = computed(() => {
    if (this.reviews.length === 0) return 0;
    return (
      this.reviews.reduce((acc, r) => acc + r.rating, 0) / this.reviews.length
    );
  });

  // Cuántas reseñas por estrella
  ratingCount(stars: number): number {
    return this.reviews.filter(r => r.rating === stars).length;
  }

  ratingPercent(stars: number): number {
    if (this.reviews.length === 0) return 0;
    return Math.round((this.ratingCount(stars) / this.reviews.length) * 100);
  }

  getStarsArray(n: number): number[] {
    return Array(n).fill(0);
  }
}
