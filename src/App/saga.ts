/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeEvery } from "redux-saga/effects";
import APIService from "../APIService";
import { decrementLoader, incrementLoader } from "../components/loader/actions";
import { setError } from "../ErrorHandler/actions";
import { addRowData, setHeaders } from "./actions";
import { GET_PERFORMANCE } from "./constants";
import { ErrorMessages } from "./errorMessages";
import { analyzeObj, getFormattedData, getLighthouseDetails } from "./utils";

export function* getPerformance(action: any) {
  try {
    const { url, iterationCount = 5 } = action.payload;
    yield put(incrementLoader());
    const homeService = APIService.getHomeRunner();
    let metrices = [];
    for (let i = 0; i < iterationCount; i++) {
      const response = //@ts-ignore
        yield call(() =>
          homeService.getPerformance({
            url,
            key: process.env.REACT_APP_API_KEY,
          })
        );
      const { loadingExperience, lighthouseResult } = response || {};
      if (response.error) {
        type StatusType = keyof typeof ErrorMessages;
        const { status } = response.error;
        const errorMessage =
          (status && ErrorMessages[status as StatusType]) ||
          ErrorMessages["DEFAULT"];
        yield put(setError(errorMessage));
      }
      if (lighthouseResult && loadingExperience) {
        metrices.push(
          getLighthouseDetails(lighthouseResult, loadingExperience)
        );
      } else {
        break;
      }
    }
    const analyzedData = analyzeObj(metrices[0], metrices);
    const { rowData, headers } = getFormattedData(analyzedData);
    //@ts-ignore
    const headerState: any = yield select((state) => state.app.headers);
    if (!headerState.length) {
      yield put(setHeaders(headers));
    }
    if (rowData.url) {
      yield put(addRowData(rowData));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(decrementLoader());
  }
}

export default function* fetchPerformanceData() {
  yield takeEvery(GET_PERFORMANCE, getPerformance);
}
