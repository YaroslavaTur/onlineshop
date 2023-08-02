import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCartComponent } from './admin/admin-cart/admin-cart.component';


const routes: Routes = [
{path: "", component:ProductsComponent},
{path: "products", component:ProductsComponent},
{path: 'product-details/:id', component: ProductDetailsComponent },
{path: "cart", component:CartComponent},
{path: "admin", component:AdminComponent},
{ path: 'cart/:id', component:AdminCartComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
