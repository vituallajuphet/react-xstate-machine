import React from "react";
import cn from "classnames";

function Spliter(props) {
  const { left, right, name } = props;

  return (
    <div className={cn(`${name}`)}>
      <div className={cn(`${name}__left`)}>{left}</div>
      <div className={cn(`${name}__right`)}>{right}</div>
    </div>
  );
}

export default Spliter;
