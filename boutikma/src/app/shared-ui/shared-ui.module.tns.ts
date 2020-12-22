
import { NgModule } from '@angular/core';
import { StarredReviewComponent } from './starred-review/starred-review.component';



@NgModule({
  declarations: [
    StarredReviewComponent
  ],
  exports: [StarredReviewComponent],
  entryComponents: [StarredReviewComponent],
  imports: [  ]
})
export class SharedUiModule { }
