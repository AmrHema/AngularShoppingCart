import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Validations/login/login.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import {HttpModule } from '@angular/Http';
import { HttpMethodeComponent } from './HttpMetods/http-methode/http-methode.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { OrdersAdminComponent } from './admin/orders-admin/orders-admin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveValidationComponent,
    HttpMethodeComponent,
    NavBarComponent,
    ProductsComponent,
    OrdersComponent,
    ProductsAdminComponent,
    OrdersAdminComponent,
    ShoppingCartComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule, BsDropdownModule.forRoot(),
    FormsModule,ReactiveFormsModule,CustomFormsModule,HttpModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
