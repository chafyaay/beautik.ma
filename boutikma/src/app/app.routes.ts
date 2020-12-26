import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
      path: '',
    redirectTo: '/product-details',
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
];
