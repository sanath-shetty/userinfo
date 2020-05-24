import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container md-6 m-auto">
        <a className="navbar-brand" href="#!">
          ReactUsers
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
