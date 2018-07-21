import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { GroupsActionTypes, GroupsAction } from "../actions/groups.actions";
import { Group } from "../../../http";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export namespace fromGroups {
  export interface State extends EntityState<Group> {
    selectedGroupId: string | null;
  }

  export const adapter: EntityAdapter<Group> = createEntityAdapter<Group>({
    selectId: (group: Group) => group.id,
    sortComparer: false
  });

  export const initialState: State = adapter.getInitialState({
    selectedGroupId: null
  });

  export function reducer(
    state = initialState,
    action: GroupsAction.Union
  ): State {
    switch (action.type) {
      case GroupsActionTypes.AddMany: {
        return adapter.addMany(action.payload.groups, state);
      }
      // noop
      default: {
        return state;
      }
    }
  }
}
