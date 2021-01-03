import { BeforeCheckoutComponent } from './../before-checkout/before-checkout.component';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ViewContainerRef } from '@angular/core';
import * as AppSettings from '@nativescript/core/application-settings';
import { ModalDialogService, ModalDialogOptions } from '@nativescript/angular';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit,OnChanges {
  nbrArticle=0;
  @Output() emitNbrArticleHandler:EventEmitter<any>=new EventEmitter();
  @Input() productInfo:any;
  @Input() qnte=0;
  productId:string;

  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.qnte = this.productInfo.qnte ;
    this.productId = this.productInfo.id;
    console.log('qunatity:',this.qnte)
  }

  addToCart(){ 
    const productInfo = JSON.stringify({...this.productInfo, _qnte: this.nbrArticle});
    AppSettings.setString('cart',productInfo);
    this.showModal();
  }

  increment(){
    if (this.nbrArticle>this.qnte) return;
    else{
          this.nbrArticle++;
    this.emitNbrArticleHandler.emit(this.nbrArticle);

    }
  }

  decrement(){
    if (this.nbrArticle<=0) return;
    else{
          this.nbrArticle--;
    this.emitNbrArticleHandler.emit(this.nbrArticle);

    }
  }





  showModal(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      fullscreen: true
    };


    this._modalService.showModal(BeforeCheckoutComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }

}
