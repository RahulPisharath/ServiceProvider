import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-area header-fixed">
     
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-xl">
            <a className="navbar-brand" href="#">
              <img src="logo.png" alt="Logo" />
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link className="nav-link" to="/">
                  <li>Home</li>
                </Link>
                <Link className="nav-link" to="/about">
                  <li>About</li>
                </Link>

                <Link className="nav-link" to="/shopping">
                  <li>Shopping</li>
                </Link>

                <Link className="nav-link" to="/userprofile">
                  <li> My Profile</li>
                </Link>
              </ul>
              <div className="search-and-icons">
                <form className="d-flex mb-2 me-2" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    aria-label="Search"
                  />
                </form>
                <div className="user-icons d-flex mb-2">
                  <div className="profile">
                    <i className="bi bi-person"></i>
                  </div>
                  <div className="wishlist">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="cart">
                    <i className="bi bi-cart3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      
    </div>
  );
};

export default Header;
