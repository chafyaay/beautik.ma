import { Component, OnInit, Input, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Page, AbsoluteLayout, View } from '@nativescript/core/ui';
import { EventData } from '@nativescript/core';

@Component({
  selector: 'ns-starred-review',
  templateUrl: './starred-review.component.html',
  styleUrls: ['./starred-review.component.scss']
})
export class StarredReviewComponent implements OnInit {

  @Input() starredReviewRate:number;
  _perWidth;
  constructor(private page:Page) { }
 

  ngOnInit(): void {

  }

 

  async onloadReviewHolder(args:EventData){
    const reviewHolder = this.page.getViewById('reviewHolder') as any
    this._perWidth = reviewHolder.getActualSize().width * this.starredReviewRate / 5  

  }

 
}