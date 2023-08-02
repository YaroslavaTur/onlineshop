import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { CartInfo } from './adminc-cartInfo'

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent {
  cart!: CartInfo;

  constructor (private dataCartId: AdminService, private route: ActivatedRoute) {}

  ngOnInit () {
    this.route.params.subscribe(params => {
      const cartId = params['id'];
      this.dataCartId.getCartId(cartId).subscribe(cartData => {
        console.log(cartData);
        this.cart = cartData;
      });
    });
  }
}
