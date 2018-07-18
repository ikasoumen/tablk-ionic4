import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from "@ngrx/store";
import { environment } from "environments/environment";
import { storeFreeze } from "ngrx-store-freeze";

import * as fromRouter from "@ngrx/router-store";
import * as fromLayout from "./layout.reducer";
import * as fromAuth from "./auth.reducer";

export namespace fromRoot {
  export interface State {
    layout: fromLayout.State;
    auth: fromAuth.State;
    router: fromRouter.RouterReducerState;
  }

  export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
    auth: fromAuth.reducer,
    router: fromRouter.routerReducer
  };

  // console.log all actions
  export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
      console.log("state", state);
      console.log("action", action);

      return reducer(state, action);
    };
  }

  export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];
}

export const featureSelectLayout = createFeatureSelector<fromLayout.State>(
  "layout"
);
export const selectShowSidenav = createSelector(
  featureSelectLayout,
  fromLayout.getShowSidenav
);
