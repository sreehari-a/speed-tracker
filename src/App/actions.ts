/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SET_HEADERS, ADD_ROWDATA, CLEAR_ROWDATA, GET_PERFORMANCE } from './constants';

export function getPerformance(payload: any) {
  return {
    type: GET_PERFORMANCE,
    payload,
  };
}
export function setHeaders(payload: any) {
  return {
    type: SET_HEADERS,
    payload,
  };
}
export function addRowData(payload: any) {
  return {
    type: ADD_ROWDATA,
    payload,
  };
}
export function clearRowData() {
  return {
    type: CLEAR_ROWDATA,
  };
}

