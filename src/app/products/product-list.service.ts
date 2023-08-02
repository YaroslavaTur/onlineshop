import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsExemp } from './productsExemp';
import { Observable } from 'rxjs';
import { ProductIhfo } from './product-details/productinfo'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<productsExemp []> {
 return this.http.get<productsExemp []>('https://fakestoreapi.com/products')
  }

  getCategories(): Observable<string []> {
    return this.http.get<string []>('https://fakestoreapi.com/products/categories')
  }

  getProduct(id:any): Observable<ProductIhfo> {
    return this.http.get<ProductIhfo>(`https://fakestoreapi.com/products/${id}`)
  }
}
