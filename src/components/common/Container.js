import React from "react";
import cn from "classnames";

export default function Container(props) {
  const { width_type, children } = props;

  return (
    <div className="containerDiv">
      <div className={cn(`containerDiv__${width_type}`)}>{children}</div>
    </div>
  );
}
