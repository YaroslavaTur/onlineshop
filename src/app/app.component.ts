import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cartCount:number = 0;
  cart:boolean = false

  constructor(private cartlenght:CartService){
    let cartCountFromStorage = localStorage.getItem('cartCount');
    if (cartCountFromStorage) {
      this.cartCount = parseInt(cartCountFromStorage, 10);
      this.cart = this.cartCount > 0;
    }
  }
  
  ngOnInit() {
    this.cartlenght.cartUpdated.subscribe(() => {
      this.cartCount = this.cartlenght.getallCart().length;
      this.cart = this.cartCount > 0;
      localStorage.setItem('cartCount', this.cartCount.toString());
    });

}}
