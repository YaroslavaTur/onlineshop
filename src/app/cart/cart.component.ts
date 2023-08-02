import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { ProductIhfo } from '../products/product-details/productinfo'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
cartList!: ProductIhfo [];
totalPrice:number = 0;

  constructor (private cartlist: CartService) {}

  ngOnInit() {
    this.cartList = this.cartlist.getallCart();
    this.totalPrice = this.cartlist.getTotalPrice()
  }

  removeFromCart(item: ProductIhfo) {
  this.cartlist.removeItemCart(item);
  this.cartList = this.cartlist.getallCart();
  this.totalPrice = this.cartlist.getTotalPrice();
  }

}
