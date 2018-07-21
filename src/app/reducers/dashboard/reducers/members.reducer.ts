import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { MembersActionTypes, MembersAction } from "../actions/members.actions";
import { Member } from "../../../http";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export namespace fromMembers {
  export interface State extends EntityState<Member> {
    selectedMemberId: string | null;
  }

  export const adapter: EntityAdapter<Member> = createEntityAdapter<Member>({
    selectId: (member: Member) => member.id,
    sortComparer: false
  });

  export const initialState: State = adapter.getInitialState({
    selectedMemberId: null
  });

  export function reducer(
    state = initialState,
    action: MembersAction.Union
  ): State {
    switch (action.type) {
      case MembersActionTypes.AddMany: {
        return adapter.addMany(action.payload.members, state);
      }
      // noop
      default: {
        return state;
      }
    }
  }
}
