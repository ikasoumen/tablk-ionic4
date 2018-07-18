import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";
import { fromSessions } from "./sessions.reducer";
import { fromRoot } from "../..";
import { fromMembers } from "./members.reducer";

export namespace fromDashboard {
  export interface DashboardState {
    sessions: fromSessions.State;
    members: fromMembers.State;
  }

  export interface State extends fromRoot.State {
    dashboard: DashboardState;
  }

  export const reducers: ActionReducerMap<DashboardState> = {
    sessions: fromSessions.reducer,
    members: fromMembers.reducer
  };

  export const getDashboardState = createFeatureSelector<DashboardState>(
    "dashboard"
  );
  export const getSessionsState = createSelector(
    getDashboardState,
    state => state.sessions
  );
  export const getMembersState = createSelector(
    getDashboardState,
    state => state.members
  );

  export const {
    selectIds: getSessionIds,
    selectEntities: getSessionEntities,
    selectAll: getAllSession,
    selectTotal: getTotalSession
  } = fromSessions.adapter.getSelectors(getSessionsState);

  export const {
    selectIds: getMemberIds,
    selectEntities: getMemberEntities,
    selectAll: getAllMember,
    selectTotal: getTotalMember
  } = fromMembers.adapter.getSelectors(getMembersState);
}
