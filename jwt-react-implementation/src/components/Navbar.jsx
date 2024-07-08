import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("authentication");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          JWT Authentication Example
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {localStorage.getItem("authentication") === null ? (
            <>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="register"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="login">
                  Login
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  onClick={() => {
                    logout();
                  }}
                  aria-current="page"
                  href="register"
                >
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
