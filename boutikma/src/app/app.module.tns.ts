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
    SignUpComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,


    SharedUiModule,
    CatalogueModule,

    ReactiveFormsModule,
    NativeScriptFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
