/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from "react";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../HomePage/Loadable";

// import GlobalStyle from '../../global-styles';
import styles from "./styles";
import stylize from "../utils/stylize";
import AppHeader from "../components/AppHeader";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import { useInjectReducer } from "../utils/injectReducer";
import { useInjectSaga } from "../utils/injectSaga";
import { clearRowData, getPerformance } from "./actions";
import { selectHeaders, selectRowData } from "./selectors";
import { selectLoading } from "../components/loader/selectors";
import ErrorHandler from "../ErrorHandler";
import { selectError } from "../ErrorHandler/selectors";

type Props = {
  classes: any;
  headers: any;
  rowData: any;
  error: string;
  loading: boolean;
  fetchPerfromance: Function;
  resetTable: Function;
  toggleTheme: Function;
};
const key = "app";
export function App(props: Props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { fetchPerfromance, classes, headers, rowData, loading, resetTable, toggleTheme, error } = props;
  return (
    <div className={classes.appRoot}>
      {
        //@ts-ignore
        <AppHeader toggleTheme={toggleTheme} />
      }
      <div className={classes.app}>
        <HomePage
          performance={{ headers, rowData }}
          getPerformance={fetchPerfromance}
          loading={loading}
          resetTable={resetTable}
        />
      </div>

      <ErrorHandler />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  headers: selectHeaders(),
  rowData: selectRowData(),
  loading: selectLoading(),
  error: selectError()
});

function mapDispatchToProps(dispatch: any) {
  return {
    fetchPerfromance: (payload: any) => dispatch(getPerformance(payload)),
    resetTable: () => dispatch(clearRowData()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default stylize(compose(withConnect, memo)(App), styles);
