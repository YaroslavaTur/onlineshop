import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductIhfo } from '../products/product-details/productinfo';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList: ProductIhfo []
cartUpdated: Subject<void> = new Subject<void>();

  constructor() {
    this.cartList = []
    this.loadCartfromlS()
   }

  addtoCart(product: ProductIhfo){
    this.cartList.push(product)
    this.cartUpdated.next();
    this.saveCarttoLS()
  }

  getallCart(){
    return this.cartList
  }

  getTotalPrice () {
    let totalPrice = 0;
    for (let item of this.cartList){
      totalPrice += item.price
    }
    return totalPrice
  }

  removeItemCart (item: ProductIhfo) {
    let i = this.cartList.indexOf(item)
    if (i > -1){
      this.cartList.splice(i, 1)
    }
    this.cartUpdated.next();
    this.saveCarttoLS()
  }

  saveCarttoLS(){
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }

  loadCartfromlS(){
    let cartListfromls = localStorage.getItem("cartList")
    if(cartListfromls){
      this.cartList = JSON.parse(cartListfromls)
    }
  }
}
