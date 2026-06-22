import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Health<span>Twin</span>
      </Link>

      <ul className="nav-links">

        <li>
          <Link
            to="/"
            className={isActive("/") ? "active-link" : ""}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard"
            className={isActive("/dashboard") ? "active-link" : ""}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/skin-analysis"
            className={isActive("/skin-analysis") ? "active-link" : ""}
          >
            Skin AI
          </Link>
        </li>

        <li>
          <Link
            to="/simulator"
            className={isActive("/simulator") ? "active-link" : ""}
          >
            Simulator
          </Link>
        </li>

        <li>
          <Link
            to="/chat"
            className={isActive("/chat") ? "active-link" : ""}
          >
            AI Chat
          </Link>
        </li>

      </ul>

      <Link to="/create-twin">
        <button className="btn">
          Create Twin
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;