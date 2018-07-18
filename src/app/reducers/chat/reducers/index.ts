import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";
import { fromSessions } from "./sessions.reducer";
import { fromRoot } from "../..";
import { fromMembers } from "./members.reducer";

export namespace fromChat {
  export interface ChatState {
    sessions: fromSessions.State;
    members: fromMembers.State;
  }

  export interface State extends fromRoot.State {
    dashboard: ChatState;
  }

  export const reducers: ActionReducerMap<ChatState> = {
    sessions: fromSessions.reducer,
    members: fromMembers.reducer
  };

  export const getChatState = createFeatureSelector<ChatState>("chat");
  export const getSessionsState = createSelector(
    getChatState,
    state => state.sessions
  );
  export const getMembersState = createSelector(
    getChatState,
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
