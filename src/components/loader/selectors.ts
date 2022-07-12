/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectReducer = (state: any) => state.loader || initialState;

export const selectLoading = () =>
  createSelector(selectReducer, (reducer) => reducer.loadingItems > 0);
