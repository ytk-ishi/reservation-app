import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  
  ngOnInit () {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductId(params.get('productId')!);
      const productObservable = this.productService.getProductId(params.get('productId')!);
      productObservable.subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.log('次のエラーが発生しました。', err);
        }
      });
    });
  }
}
