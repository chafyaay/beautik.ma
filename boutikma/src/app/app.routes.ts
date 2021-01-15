import { SignInComponent } from './auth/sign-in/sign-in.component';
import { BeforeCheckoutComponent } from '@src/app/shared-ui/before-checkout/before-checkout.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path: 'before-checkpoint',
    component: BeforeCheckoutComponent,
  },
  {
    path: 'cart-details',
    component: CartDetailsComponent,
  },
  {
    path: 'shipping',
    component: ShippingComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];
