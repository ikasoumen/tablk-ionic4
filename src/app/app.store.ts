import { Injectable } from '@angular/core';
import { State, Store } from 'walts';

import { AppDispatcher } from './app.dispatcher';

export class AppState extends State {
  appearances: {
    paneSplitted: boolean
  };
}

const INIT_STATE: AppState = {
  appearances: {
    paneSplitted: false
  }
};

@Injectable()
export class AppStore extends Store<AppState> {

  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
