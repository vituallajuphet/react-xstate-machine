import React from "react";
import { Spliter } from "../common/index";
import { Nav, SearchBar } from "./index";
import { Container } from "../common/index";

function Header() {
  const menus = [
    {
      id: "1",
      label: "Home",
      exact: true,
      to: "/home" && "/"
    },
    {
      id: "2",
      label: "About",
      exact: true,
      to: "/about"
    },
    {
      id: "3",
      label: "Blog",
      exact: true,
      to: "/blog"
    }
  ];

  return (
    <div className="header">
      <Container width_type="wrap">
          <Spliter
            left={<Nav menus={menus} />}
            right={<SearchBar classname="searchbar" />}
            name="spliter"
          />
        </Container> 
      </div>
  );
}

export default Header;
