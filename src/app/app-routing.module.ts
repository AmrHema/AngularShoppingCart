import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersAdminComponent } from './admin/orders-admin/orders-admin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Products', component: ProductsComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'admin/Products', component: ProductsAdminComponent },
  { path: 'admin/Orders', component: OrdersAdminComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
