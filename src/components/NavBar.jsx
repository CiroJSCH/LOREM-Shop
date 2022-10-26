// Components
import CartWidget from "./CartWidget";

// Icons
import { BsFileEarmarkCode } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand d-flex align-items-center gap-2">
          <BsFileEarmarkCode className="fs-2"/>
          <span style={{color: "#20c997"}} className="font-monospace">LOREM Shop</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 0</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 3</a>
            </li>
          </ul>
          <hr className="text-white-50"/>
          <div className="d-flex gap-3 align-items-center">
            <button type="button" className="btn btn-outline-primary px-5 login-button">Login</button>
            <CartWidget />
          </div>
          <hr className="text-white-50"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
