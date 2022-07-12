import React from "react";
import styles from "./styles";
import stylize from "../../utils/stylize";

function AppHeader(props) {
  return (
    <div className={`${props.classes.appHeader}`}>
      {/* <div className={props.classes.logo}></div> */}
      <span class="caligraphy">Speed Tracker</span>
    </div>
  );
}
export default stylize(AppHeader, styles);
