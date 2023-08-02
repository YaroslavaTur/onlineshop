import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { adminExemp } from './adminExemp';
import { Observable } from 'rxjs';
import { CartInfo } from './/admin-cart/adminc-cartInfo'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllCarts():Observable<adminExemp []> {
    return this.http.get<adminExemp []>('https://fakestoreapi.com/carts')
     }

  getCartId(cartId: number): Observable<CartInfo> {
    return this.http.get<CartInfo>(`https://fakestoreapi.com/carts/${cartId}`);
  }

  getcartsbyDate(startDate: string, endDate: string): Observable<adminExemp []> {
    return this.http.get<adminExemp []>(`https://fakestoreapi.com/carts?startdate=${startDate}&enddate=${endDate}`);
}
}
