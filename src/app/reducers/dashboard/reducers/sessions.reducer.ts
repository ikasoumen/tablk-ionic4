import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import {
  SessionsActionTypes,
  SessionsAction
} from "../actions/sessions.actions";
import { Session } from "../../../http";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export namespace fromSessions {
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
      case SessionsActionTypes.SelectChat: {
        return {
          ...state,
          selectedSessionId: action.payload.sessionId
        };
      }
      // noop
      case SessionsActionTypes.GetAll:
      default: {
        return state;
      }
    }
  }
}
