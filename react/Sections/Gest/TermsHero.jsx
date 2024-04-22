import React from "react";
import "./css/Hero.css";
import { Link } from "react-router-dom";
function TermsHero() {
  return (
    <div className="termsHero text-white p-3">
      <div className="row mt-5">
        <div className="col-md-4">
          <h2>
            <span className="text-info h1">TMS-</span> <br />
            Tourism Management System
          </h2>
          <div className="d-flex gap-4 my-5">
            <Link
              className="btn btn-outline-light p-3 px-5"
              to={"/gest/ToursPackages"}
            >
              Book Now
            </Link>
            <Link
              className="btn btn-secondary p-3 px-5 shadow-0"
              to={"/gest/Enquiry"}
            >
              Enquiry For Backages
            </Link>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default TermsHero;
