import { SharedUiModule } from './../shared-ui/shared-ui.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from '../app-routing.module.tns';


@NgModule({
  declarations: [ProductDetailsComponent],
  entryComponents: [ProductDetailsComponent],
  exports: [ProductDetailsComponent],
  imports: [ 
    NativeScriptModule,
    AppRoutingModule,
    SharedUiModule,
   ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CatalogueModule { }
