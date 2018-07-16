import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import {
  DashboardMembersActionTypes,
  DashboardMembersAction
} from "../ngrx-actions/dashboard.members.action";
import { Member } from "../http";
import { createSelector, createFeatureSelector } from "@ngrx/store";

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
  action: DashboardMembersAction.Union
): State {
  switch (action.type) {
    case DashboardMembersActionTypes.AddMany: {
      return adapter.addMany(action.payload.members, state);
    }
    // noop
    default: {
      return state;
    }
  }
}

const featureSelectDashboard = createFeatureSelector<State>("dashboard");
const featureSelectMembers = createFeatureSelector<State>("members");
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the dictionary of member entities
export const entities = createSelector(
  featureSelectDashboard,
  featureSelectMembers,
  selectEntities
);

// select the array of members
export const all = createSelector(
  featureSelectDashboard,
  featureSelectMembers,
  selectAll
);

// select the total member count
export const total = createSelector(
  featureSelectDashboard,
  featureSelectMembers,
  selectTotal
);

export const ids = createSelector(
  featureSelectDashboard,
  featureSelectMembers,
  selectIds
);
