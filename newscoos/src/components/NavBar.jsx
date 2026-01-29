import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const { title, mode, togglemode, modeName } = this.props;

    return (
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center ms-4" href="/">
              <img
                src="/logo.png"
                alt="Logo"
                width="40"
                height="40"
                className="me-2"
              />
              <strong></strong>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    {title}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
              </ul>
              <button type="button" onClick={togglemode} className={`btn btn-${mode === "light" ? "dark" : "light"}`}>{modeName}</button>
              {/* <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={togglemode}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {modeName}
                </label>
              </div> */}
            </div>
          </div>
        </nav>
      </>
    );
  }
}
