import { AccordionComponent } from '@src/app/accordion/accordion.component';
import { OrderComponent } from './order/order.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SharedUiModule } from './shared-ui/shared-ui.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { CatalogueModule } from './catalogue/catalogue.module.tns';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ReactiveFormsModule } from '@angular/forms';

// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartDetailsComponent,
    ShippingComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    OrderComponent,
    AccordionComponent
  ],
  imports: [
    NativeScriptModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    SharedUiModule,
    CatalogueModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
