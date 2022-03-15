import React from "react";
import icon from "../icons/icon.png";

function Navbar() {
  return (
    <nav>
      <img src={icon} alt="icon" />
      <span>my travel journal.</span>
    </nav>
  );
}

export default Navbar;
