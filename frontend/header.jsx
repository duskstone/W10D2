import React from "react";

const Header = ({ title, handleClick, current }) => (
  <li className={current ? "active" : ""}>
    <h1 onClick={handleClick}>{title}</h1>
  </li>
);

export default Header;
