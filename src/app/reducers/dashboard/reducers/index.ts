import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
  MemoizedSelector
} from "@ngrx/store";
import { fromSessions } from "./sessions.reducer";
import { fromRoot } from "app/reducers";
import { Statement } from "../../../../../node_modules/@angular/compiler";

export interface DashboardState {
  sessions: fromSessions.State;
}

export interface State extends fromRoot.State {
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<DashboardState> = {
  sessions: fromSessions.reducer
};

// @todo: remove this.
// 型定義がうまく解決できずここにコピーしてきた
declare function createFeatureSelector<T, V>(
  featureName: keyof T
): MemoizedSelector<T, V>;

export const getDashboardState = createFeatureSelector<State, DashboardState>(
  "dashboard"
);
export const getSessionsEntitiesState = createSelector(
  getDashboardState,
  state => state.sessions
);

export const {
  selectIds: getSessionIds,
  selectEntities: getSessionEntities,
  selectAll: getAllSession,
  selectTotal: getTotalSession
} = fromSessions.adapter.getSelectors(getSessionsEntitiesState);
