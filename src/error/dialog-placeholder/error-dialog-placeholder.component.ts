import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { SunSystemsErrorState } from '../error.state';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'error-dialog-placeholder',
  template: '<div></div>',
})
export class ErrorDialogPlaceholderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  @Select(SunSystemsErrorState.getError)
  public error$!: Observable<Error>;

  constructor() {}

  public ngOnInit() {
    this.error$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((e: Error) => this.onError(e));
  }

  public ngOnDestroy() {
    this.destroyed$.next(undefined);
    this.destroyed$.complete();
  }

  private onError(error: Error) {
    console.log('On Error');
  }
}
