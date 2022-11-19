// Libraries
import { Link } from "react-router-dom";

// Components
import CartWidget from "./CartWidget";

// Data
import { categories } from "../util/categoriesData";

// Icons
import { BsFileEarmarkCode } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-primary px-1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <BsFileEarmarkCode className="fs-2" />
          <span style={{ color: "#20c997" }} className="font-monospace">
            LOREM Shop
          </span>
        </Link>
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
            {Object.keys(categories).map((category, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link"
                    to={`/category/${categories[category]}`}
                  >
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr className="text-white-50" />
          <div className="d-flex gap-3 align-items-center">
            <button
              type="button"
              className="btn btn-outline-primary px-5 login-button"
            >
              Login
            </button>
            <CartWidget />
          </div>
          <hr className="text-white-50" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
