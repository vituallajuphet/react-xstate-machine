import React from "react";
import cn from "classnames";

export default function SearchBar(props) {
  const { classname } = props;

  return (
    <div className={cn(`${classname}`)}>
      <form method="post" className={cn(`${classname}__form`)}>
        <input
          className={cn(`${classname}__form--input`)}
          required
          type="text"
          placeholder="Search Here..."
        />
      </form>
    </div>
  );
}
