import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ProductIhfo } from './productinfo';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product!: ProductIhfo;

constructor (private route: ActivatedRoute,
  private aboutProduct: ProductListService, private cart:CartService) {}


  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    this.aboutProduct.getProduct(productId).subscribe(result => {
      this.product = result;
    });
  }

  addtoCart(product: ProductIhfo) {
    this.cart.addtoCart(product);
  }
}
