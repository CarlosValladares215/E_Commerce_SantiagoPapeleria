import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductActions } from './components/product-actions/product-actions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductActions
  ],
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class Product {}
