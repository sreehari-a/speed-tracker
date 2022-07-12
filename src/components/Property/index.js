import React from "react";
import stylize from "../../utils/stylize";
import styles from "./styles";

function Property(props) {
  const { classes, rootClass, labelClass, valueClass } = props;
  return (
    <div className={`${classes.property} ${rootClass}`}>
      <div className={labelClass}>{props.label}</div>
      <div className={valueClass}>{props.value}</div>
    </div>
  );
}
export default stylize(Property, styles);