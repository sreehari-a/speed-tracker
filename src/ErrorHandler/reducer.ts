/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import { RESET_ERROR, SET_ERROR } from "./constants";

export type State = {
  error: string | null;
};
// The initial state of the App
export const initialState: State = {
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const errorReducer = (state: State = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ERROR:
        draft.error = action.payload;
        break;
      case RESET_ERROR:
        draft.error = initialState.error;
        break;
    }
  });

export default errorReducer;
