import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { productsExemp } from './productsExemp';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: productsExemp [] = [];
  categories: string [] | undefined;
  selectedCategory: string = '';
  sortPrice: string = ''
  displayProduct: productsExemp [] = []
  itemsforPage: number = 6;
  page: number = 1;
  minPage: number = 1;
  maxPage: number = 1

constructor (private data: ProductListService, private router: Router, private cart: CartService) {}

ngOnInit(){
this.data.getProducts().subscribe(result  => { console.log(result); this.products = result; this.displayedProducts()})
this.data.getCategories().subscribe(result => {console.log(result), this.categories = result})
}

onCategoryChange(event: any) {
  this.selectedCategory = event.target.value;
  this.page = 1; 
  this.displayedProducts();
}

getFilteredProducts() {
  let filteredProducts: productsExemp [] = this.products;
  if (this.selectedCategory !== '') {
    filteredProducts = filteredProducts.filter((product) => product.category === this.selectedCategory);
  }
  if (this.sortPrice === 'asc') {
    filteredProducts.sort((a: any, b: any) => a.price - b.price);
  } else if (this.sortPrice === 'desc') {
    filteredProducts.sort((a: any, b: any) => b.price - a.price);
  }

  return filteredProducts;
}


displayedProducts() {
  let start = (this.page - 1) * this.itemsforPage;
  let end = start + this.itemsforPage;
  this.displayProduct = this.getFilteredProducts().slice(start, end);
  this.minPage = this.page;
  this.maxPage = Math.ceil(this.getFilteredProducts().length / this.itemsforPage);
  if (this.maxPage === 0) {
    this.minPage = 0;
  }
}

prevPage() {
  if (this.page > 1) {
    this.page--;
    this.displayedProducts();
  }
}

nextPage() {
  if (this.page < this.maxPage) {
    this.page++;
    this.displayedProducts();
  }}

sortByPrice(order: string) {
  this.sortPrice = order;
  this.page = 1; 
  this.displayedProducts();
}

viewProduct(productId: number) {
  this.router.navigate(['/product-details', productId]);
}

addtoCart(product: any) {
  this.cart.addtoCart(product);
}


}
 