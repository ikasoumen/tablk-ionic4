import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";
import { fromSessions } from "./sessions.reducer";
import { fromRoot } from "../..";
import { fromMembers } from "./members.reducer";
import { fromGroups } from "./groups.reducer";

export namespace fromDashboard {
  export interface DashboardState {
    sessions: fromSessions.State;
    members: fromMembers.State;
    groups: fromGroups.State;
    selectedSessionId: string | null;
  }

  export interface State extends fromRoot.State {
    dashboard: DashboardState;
  }

  export const reducers: ActionReducerMap<DashboardState> = {
    sessions: fromSessions.reducer,
    members: fromMembers.reducer,
    groups: fromGroups.reducer,
    selectedSessionId: null
  };

  export const getDashboardState = createFeatureSelector<DashboardState>(
    "dashboard"
  );
  export const getSessionsState = createSelector(
    getDashboardState,
    state => state.sessions
  );
  export const getSelectedSessionId = createSelector(
    getDashboardState,
    state => state.selectedSessionId
  );

  export const {
    selectIds: getSessionIds,
    selectEntities: getSessionEntities,
    selectAll: getAllSession,
    selectTotal: getTotalSession
  } = fromSessions.adapter.getSelectors(getSessionsState);

  // Members Selectors
  const getMembersState = createSelector(
    getDashboardState,
    state => state.members
  );

  export const {
    selectIds: getMemberIds,
    selectEntities: getMemberEntities,
    selectAll: getAllMember,
    selectTotal: getTotalMember
  } = fromMembers.adapter.getSelectors(getMembersState);

  // Groups Selectors
  const getGroupsState = createSelector(
    getDashboardState,
    state => state.groups
  );
  export const {
    selectIds: getGroupIds,
    selectEntities: getGroupEntities,
    selectAll: getAllGroup,
    selectTotal: getTotalGroup
  } = fromGroups.adapter.getSelectors(getGroupsState);

  /** 現在の Main Group を取得する */
  export const getCurrentChatMainGroup = createSelector(
    getDashboardState,
    state => state.groups
  );
}
