import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss', ]
})

export class ProductListingComponent {

  products: any;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log('次のエラーが発生しました。', err);
      }
    });
  }
}
