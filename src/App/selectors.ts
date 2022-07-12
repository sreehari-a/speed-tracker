/**
 * The global state selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectReducer = (state: any) => state.app || initialState;

export const selectHeaders = () =>
  createSelector(selectReducer, (reducer) => reducer.headers);

export const selectRowData = () =>
  createSelector(selectReducer, (reducer) => reducer.rowData);
