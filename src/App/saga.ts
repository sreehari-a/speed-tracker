/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeEvery } from "redux-saga/effects";
import APIService from "../APIService";
import { decrementLoader, incrementLoader } from "../components/loader/actions";
import { addRowData, setHeaders } from "./actions";
import { GET_PERFORMANCE } from "./constants";
import { analyzeObj, getFormattedData, getLighthouseDetails } from "./utils";

export function* getPerformance(action: any) {
  try {
    const { url, iterationCount = 5, API_KEY } = action.payload;
    yield put(incrementLoader());
    const homeService = APIService.getHomeRunner();
    let metrices = [];
    for (let i = 0; i < iterationCount; i++) {
      const {
        loadingExperience,
        lighthouseResult,
      } = //@ts-ignore
        yield call(() =>
          homeService.getPerformance({
            url,
            key: 'AIzaSyCuW-Cb8ECUtHgr5mzYcJHF9ciXstXQ3rA',
          })
        );
      metrices.push(getLighthouseDetails(lighthouseResult, loadingExperience));
    }
    const analyzedData = analyzeObj(metrices[0], metrices);
    const { rowData, headers } = getFormattedData(analyzedData);
    //@ts-ignore
    const headerState: any = yield select((state) => state.app.headers);
    if(!headerState.length){
      yield put(setHeaders(headers));

    }
    yield put(addRowData(rowData));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(decrementLoader());
  }
}

export default function* fetchPerformanceData() {
  yield takeEvery(GET_PERFORMANCE, getPerformance);
}
