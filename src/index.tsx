import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./configureStore";
import './fonts/notoSerif/NotoSerifDisplay-Italic-VariableFont_wdth,wght.ttf';
import './fonts/notoSerif/NotoSerifDisplay-VariableFont_wdth,wght.ttf'
import './fonts/splineSans/SplineSansMono-VariableFont_wght.ttf'

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
