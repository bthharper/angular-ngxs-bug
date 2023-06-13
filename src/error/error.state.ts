import { State, Action, StateContext, Selector } from '@ngxs/store';

import { Injectable } from '@angular/core';
import { RaiseError } from './error.actions';

export class ErrorStateModel {
  public error: Error | undefined;
}

// eslint-disable-next-line max-classes-per-file
@State<ErrorStateModel>({
  name: 'errorState',
  defaults: new ErrorStateModel(),
})
@Injectable()
export class SunSystemsErrorState {
  /**
   * Selector to return all the current users, can be reloaded!
   */
  @Selector()
  public static getError(state: ErrorStateModel) {
    return state.error;
  }

  // -----------------------------------------------------------------

  @Action(RaiseError)
  public raiseError(
    { patchState }: StateContext<ErrorStateModel>,
    { error }: RaiseError
  ) {
    patchState({ error });
  }
}
