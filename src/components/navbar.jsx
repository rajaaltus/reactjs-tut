import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar-rendered");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <p>
          SHOPPING{"React"}
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </p>
      </a>
    </nav>
  );
};

export default Navbar;
