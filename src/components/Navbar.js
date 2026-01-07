import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <NavLink to="/">Home</NavLink> ·{" "}
<NavLink to="/writing">Writing</NavLink> ·{" "}
<NavLink to="/about">About</NavLink>

    </nav>
  );
}

export default Navbar;
