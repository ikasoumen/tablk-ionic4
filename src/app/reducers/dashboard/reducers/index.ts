import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";
import { fromSessions } from "./sessions.reducer";
import { fromRoot } from "app/reducers";
import { Statement } from "../../../../../node_modules/@angular/compiler";

export namespace fromDashboard {
  export interface DashboardState {
    sessions: fromSessions.State;
  }

  export interface State extends fromRoot.State {
    dashboard: DashboardState;
  }

  export const reducers: ActionReducerMap<DashboardState> = {
    sessions: fromSessions.reducer
  };

  export const getDashboardState = createFeatureSelector<DashboardState>(
    "dashboard"
  );
  export const getSessionsState = createSelector(
    getDashboardState,
    state => state.sessions
  );

  export const {
    selectIds: getSessionIds,
    selectEntities: getSessionEntities,
    selectAll: getAllSession,
    selectTotal: getTotalSession
  } = fromSessions.adapter.getSelectors(getSessionsState);
}
