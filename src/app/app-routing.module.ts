import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerComponent } from './components/seller/seller.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "seller", component: SellerComponent},
  {path: "cart", component: CartComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SingupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
