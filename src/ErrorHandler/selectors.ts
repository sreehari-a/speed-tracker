/**
 * The global state selectors
 */

import { createSelector } from "reselect";
import { initialState, State } from "./reducer";

const selectReducer = (state :any) => state.error || initialState;

export const selectError = () =>
  createSelector(selectReducer, (reducer: State) => reducer.error);

