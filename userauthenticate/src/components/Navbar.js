import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-red navbar-light">
      <div className="container">
        <Link className={`navbar-brand ${location.pathname === "/" ? "active" : ""}`} to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              {/* Add any additional nav items here */}
            </li>
            <li className="nav-item mx-3">
              <h2 className="navbar-text d-none d-md-block">User Authentication System</h2>
            </li>
          </ul>
          <div className="d-flex">
            {!localStorage.getItem('token') ? (
              <Link className="btn btn-primary mx-2" role="button" to="/signup">
                Register
              </Link>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary mx-2">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
