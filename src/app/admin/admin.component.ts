
import { Component } from '@angular/core';
import { adminExemp } from './adminExemp';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
carts: adminExemp [] = [];
totalSum: number = 0;
startDate: string = '';
endDate: string = '';

constructor (private dataCart: AdminService, private router: Router) {}

ngOnInit(){
  this.dataCart.getAllCarts().subscribe(result => { console.log(result); this.carts = result; this.calculateTotalSum();})
  }

  calculateTotalSum(): void {
    this.totalSum = this.carts.reduce(
      (total:any, cart:any) => total + cart.totalPrice,
      0
    );
  }

  viewCart(cartId: number) {
    this.router.navigate(['/cart', cartId]);
  }

  filterbyDateCarts() {
    if (!this.startDate || !this.endDate) {
      return;
    }

    this.dataCart.getcartsbyDate(this.startDate, this.endDate).subscribe(result => {
      this.carts = result;
      this.calculateTotalSum();
    });
  }

  clearFilter() {
this.startDate = '';
this.endDate = '';
this.dataCart.getAllCarts().subscribe(result => { console.log(result); this.carts = result; this.calculateTotalSum();})
  }
}
