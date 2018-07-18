import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { SessionsActionTypes, SessionsAction } from "./sessions.actions";
import { Session } from "../../http";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export interface State extends EntityState<Session> {
  selectedSessionId: string | null;
}

export const adapter: EntityAdapter<Session> = createEntityAdapter<Session>({
  selectId: (session: Session) => session.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedSessionId: null
});

export function reducer(
  state = initialState,
  action: SessionsAction.Union
): State {
  switch (action.type) {
    case SessionsActionTypes.AddMany: {
      return adapter.addMany(action.payload.sessions, state);
    }
    // noop
    case SessionsActionTypes.GetAll:
    default: {
      return state;
    }
  }
}

const featureSelectSessions = createFeatureSelector<State>("sessions");
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the dictionary of session entities
export const entites = createSelector(featureSelectSessions, selectEntities);

// select the array of sessions
export const all = createSelector(featureSelectSessions, selectAll);

// select the total session count
export const total = createSelector(featureSelectSessions, selectTotal);

export const ids = createSelector(featureSelectSessions, selectIds);
