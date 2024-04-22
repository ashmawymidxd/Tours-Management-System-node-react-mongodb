import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { UserLayout } from "../../Layouts";
import "./css/Navbar.css";
import { useState } from "react";

function GestNavbar() {
  const location = useLocation();
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/auth/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:4000/api/auth/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setRedirect(true);
  }

  if (redirect) {
    window.location = "/gest/home";
  }

  const username = userInfo?.username;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar"
        style={{ display: "block" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand mt-2 mt-lg-0" to="/gest">
            <i className="fas fa-globe fa-2xl"></i>
            <h5 className="pt-1 mx-2">Tours</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${
                  location.pathname === "/gest/home" ? "active-link-navbar" : ""
                }`}
              >
                <Link className="nav-link" to="/gest/home">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/gest/About"
                    ? "active-link-navbar"
                    : ""
                }`}
              >
                <Link className="nav-link" to="/gest/About">
                  About
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/gest/ToursPackages"
                    ? "active-link-navbar"
                    : ""
                }`}
              >
                <Link className="nav-link" to="/gest/ToursPackages">
                  Tours Packages
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/gest/PrivacyPolicy"
                    ? "active-link-navbar"
                    : ""
                }`}
              >
                <Link className="nav-link" to="/gest/PrivacyPolicy">
                  Privacy Policy
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/gest/TermsofUse"
                    ? "active-link-navbar"
                    : ""
                }`}
              >
                <Link className="nav-link" to="/gest/TermsofUse">
                  Terms of Use
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/gest/ContactUs"
                    ? "active-link-navbar"
                    : ""
                }`}
              >
                <Link className="nav-link" to="/gest/ContactUs">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                {username && (
                  <li
                    className={`nav-item ${
                      location.pathname === "/gest/Enquiry"
                        ? "active-link-navbar"
                        : ""
                    }`}
                  >
                    <Link className="nav-link" to="/gest/Enquiry">
                      Enquiry?
                    </Link>
                  </li>
                )}
              </li>
            </ul>

            <div className="d-flex align-items-center justify-content-start gap-3">
              {username && (
                <>
                  <Link className="text-white">
                    <span className="text-info">{userInfo?.username}</span>
                  </Link>
                  <Link className="btn btn-light shadow-0" onClick={logout}>
                    Logout <i className="fas fa-out"></i>
                  </Link>
                </>
              )}
              {!username && (
                <>
                  <Link
                    className="btn btn-outline-light shadow-0 text-info"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-light text-primary shadow-0"
                    to="/Register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {username && <UserLayout />}
    </>
  );
}

export default GestNavbar;
