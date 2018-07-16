import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  combineReducers
} from "@ngrx/store";
import { environment } from "environments/environment";
import { storeFreeze } from "ngrx-store-freeze";

import * as fromRouter from "@ngrx/router-store";
import * as fromLayout from "./layout.reducer";
import * as fromAuth from "./auth.reducer";
import * as fromSessions from "./sessions.reducer";
import * as fromMembers from "./dashboard.members.reducer";

export interface DashboardState {
  sessions: fromSessions.State;
  members: fromMembers.State;
}

export const dashboardReducer = combineReducers({
  sessions: fromSessions.reducer,
  members: fromMembers.reducer
});

export interface State {
  layout: fromLayout.State;
  auth: fromAuth.State;
  dashboard: DashboardState;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  auth: fromAuth.reducer,
  dashboard: dashboardReducer,
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

export const featureSelectLayout = createFeatureSelector<fromLayout.State>(
  "layout"
);
export const featureSelectDashboard = createFeatureSelector<fromLayout.State>(
  "dashboard"
);
export const featureSelectSession = createFeatureSelector<fromLayout.State>(
  "session"
);

export const selectDashboardSessionsAll = createSelector(
  featureSelectDashboard,
  featureSelectSession,
  fromSessions.all
);

export const selectShowSidenav = createSelector(
  featureSelectLayout,
  fromLayout.getShowSidenav
);
