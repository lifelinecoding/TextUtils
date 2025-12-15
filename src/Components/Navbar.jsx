import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'dark'? "bg-dark": "bg-secondary"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active text-white" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            style={{ width: "40px", height: "20px" }}
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label text-light mx-3"
            htmlFor="switchCheckDefault"
          >
            {props.theme}
          </label>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};

export { Navbar };
