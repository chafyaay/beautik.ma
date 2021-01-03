import { BeforeCheckoutComponent } from './before-checkout/before-checkout.component';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { StarredReviewComponent } from './starred-review/starred-review.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';



@NgModule({
  declarations: [
    StarredReviewComponent,
    NavbarComponent,
    AddToCartComponent,
    BeforeCheckoutComponent
  ],
  exports: [
    StarredReviewComponent,
    NavbarComponent,
    AddToCartComponent,
    BeforeCheckoutComponent
  ],
  entryComponents: [
    StarredReviewComponent,
    NavbarComponent,
    AddToCartComponent,
    BeforeCheckoutComponent
  ],
  imports: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedUiModule { }
