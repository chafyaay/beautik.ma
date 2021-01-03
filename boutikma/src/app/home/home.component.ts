import { appData } from './../data';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { registerElement, RouterExtensions } from '@nativescript/angular';
import { Carousel, CarouselItem } from 'nativescript-carousel';
import { ItemEventData } from '@nativescript/core';
registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild("myCarousel", { static: false }) carouselView: ElementRef<Carousel>;

  myTapPageEvent(args) {
    //console.log('Tapped page index: ' + (this.carouselView.nativeElement.selectedPage));
  }

  myChangePageEvent(args) {
    //console.log('Page changed to index: ' + args.index);
  };

  public appData=appData;

  constructor(private route: RouterExtensions) { }

  ngOnInit(): void {
    //console.log(this.carouselitems)
  }

  buyHandler(event:any){

  }


  onLoaded(event:any){

  }

  onItemTap(args: ItemEventData) {
    this.route.navigate(['/product-details', { id: args.index }])
  }


  onItemLoading(){

  }
}
