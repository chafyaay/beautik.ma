import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Carousel, CarouselItem } from 'nativescript-carousel';
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
    console.log('Tapped page index: ' + (this.carouselView.nativeElement.selectedPage));
  }

  myChangePageEvent(args) {
    console.log('Page changed to index: ' + args.index);
  };

  public appData = {
    "promotion":[
 {
      id: 0,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 2.3,
      imageUrl: '~/assets/images/products/1.jpg',
    },
    {
      id: 1,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 3.3,
      imageUrl: '~/assets/images/products/2.jpg',
    },
    {
      id: 2,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/3.jpg',
    }
  ],
  productList:[
    {
      id: 0,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/1.jpg',
    }, 
    {
      id: 1,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/2.jpg',
    },
    {
      id: 3,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/3.jpg',
    },
    {
      id: 4,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/4.jpg',
    },
    {
      id: 5,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/5.jpg',
    },
    {
      id: 6,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/6.jpg',
    },
    {
      id: 7,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/7.jpg',
    },
    {
      id: 8,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/8.jpg',
    },
    {
      id: 9,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/9.jpg',
    },
    {
      id: 10,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/10.jpg',
    },
    {
      id: 11,
      productname: 'Puricon Cocotte Fonte',
      description: 'Puricon Cocotte Fonte',
      price: 200,
      discount: 50,
      starredReview: 4.9,
      imageUrl: '~/assets/images/products/11.jpg',
    },
  ]
   
}

  constructor() { }

  ngOnInit(): void {
    //console.log(this.carouselitems)
  }

  buyHandler(event){

  }


  onLoaded(event){

  }
  onItemTap(event){
console.log(event)
  }
  onItemLoading(){

  }
}
