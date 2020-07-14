import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      
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
              <button>About</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/newround"
              className={window.location.pathname === "/newround" ? "nav-link active" : "nav-link"}
            >
            <button>New Round</button>
            </Link>
          </li>
        </ul>
    </div>
    </nav>
  );
}

export default Navbar