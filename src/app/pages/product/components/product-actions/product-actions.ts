import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-actions.html',
  styleUrls: ['./product-actions.scss']
})
export class ProductActions {

  // Recibe el estado del producto desde el padre
  @Input() stock: number = 0;
  @Input() productId!: number;
  @Input() productName!: string;

  // Cantidad seleccionada
  quantity = 1;

  // Eventos para comunicar al padre
  @Output() addToCart = new EventEmitter<{ id: number; quantity: number }>();
  @Output() notify = new EventEmitter<string>();

  // Aumentar cantidad
  increase() {
    if (this.quantity < this.stock) {
      this.quantity++;
    }
  }

  // Disminuir cantidad
  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Acción principal
  handleAddToCart() {
    if (this.stock === 0) {
      this.notify.emit('Este producto está agotado');
      return;
    }

    this.addToCart.emit({
      id: this.productId,
      quantity: this.quantity
    });

    this.notify.emit(`${this.productName} agregado al carrito`);
  }
}
