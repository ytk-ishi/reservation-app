import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss', ]
})

export class ProductListingComponent {

  products: any;
  
  ngOnInit() {
    this.products = products;
  }
}
