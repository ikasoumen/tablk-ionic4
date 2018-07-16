import { LayoutActionTypes, LayoutActionsUnion } from "./layout.actions";

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActionsUnion
): State {
  switch (action.type) {
    case LayoutActionTypes.SetSideNavShown:
      return {
        showSidenav: false
      };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
