
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { StarredReviewComponent } from './starred-review/starred-review.component';



@NgModule({
  declarations: [
    StarredReviewComponent
  ],
  exports: [StarredReviewComponent],
  entryComponents: [StarredReviewComponent],
  imports: [  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class SharedUiModule { }
