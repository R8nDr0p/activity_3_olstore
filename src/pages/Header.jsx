import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand ms-2 fw-bold p-0">
            <h1 className="header-brand-name">
              <i className="fa-solid fa-bounce fa-keyboard fa-2xl"></i>Keyboard
              Palace
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to={"/"} className={"nav-link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/products"} className={"nav-link"}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className={"nav-link"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className={"nav-link"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
