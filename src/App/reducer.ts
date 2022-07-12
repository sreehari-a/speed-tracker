/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import { ADD_ROWDATA, SET_HEADERS, CLEAR_ROWDATA } from "./constants";

type State = {
  headers: any[];
  rowData: any[];
};
// The initial state of the App
export const initialState: State = {
  headers: [],
  rowData: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state: State = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_HEADERS:
        draft.headers = action.payload;
        break;
      case ADD_ROWDATA:
        draft.rowData = [...state.rowData, action.payload];
        break;
      case CLEAR_ROWDATA:
        draft.rowData = [...initialState.rowData];
        break;
    }
  });

export default appReducer;
