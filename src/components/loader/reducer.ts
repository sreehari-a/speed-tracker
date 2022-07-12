/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import { INCREMENT_LOADER, DECREMENT_LOADER } from "./constants";

// The initial state of the App
export const initialState = {
  loadingItems: 0,
};

/* eslint-disable default-case, no-param-reassign */
const loadingReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREMENT_LOADER:
        draft.loadingItems = state.loadingItems+1;
        break;
      case DECREMENT_LOADER:
        draft.loadingItems = state.loadingItems-1;
        break;
    }
  });

export default loadingReducer;
