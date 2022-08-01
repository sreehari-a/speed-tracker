import React from "react";
import styles from "./styles";
import stylize from "../../utils/stylize";
import { Button } from "antd";

type Props = {
  classes: any;
  toggleTheme: Function;
}
function AppHeader(props: Props) {
  return (
    <div className={`${props.classes.appHeader}`}>
      <div className={props.classes.logo}></div>
      <span className="caligraphy">Speed Tracker</span>
      <div className={props.classes.buttonGroup}>
        
      <Button onClick={() => props.toggleTheme()}>Toggle Theme</Button>
      </div>
    </div>
  );
}
export default stylize(AppHeader, styles);
