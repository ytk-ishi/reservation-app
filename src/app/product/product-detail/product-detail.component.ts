import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = +(params.get('productId') ?? 0);
      this.product = products[id];
    })
  }
}
