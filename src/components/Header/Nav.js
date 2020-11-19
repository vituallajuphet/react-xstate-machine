import React from "react";
import { NavLink } from "react-router-dom";
import {Logo} from "./index"


export default function Nav(props) {
  const { menus } = props;

  const navlist = menus.map((itm) => (
    <li className="nav__list--item" key={itm.id}>
      <NavLink
        className="nav__list--itemLink"
        activeClassName="active-itemLink"
        {...itm}
      >
        {itm.label}
      </NavLink>
    </li>
  ));

  return (
    <div className="navCont">
      <Logo class_name = "Logo"/>
      <nav className="nav">
        <ul className="nav__list">{navlist}</ul>
      </nav>
    </div>
  );
}
