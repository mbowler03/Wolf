import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <Link className="navbar-brand" to="/">
        Wolf
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/newround"
              className={window.location.pathname === "/newround" ? "nav-link active" : "nav-link"}
            >
              New Round
            </Link>
          </li>
        </ul>
    </div>
    </nav>
  );
}

export default Navbar