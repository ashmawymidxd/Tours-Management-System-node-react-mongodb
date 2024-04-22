import React from "react";
import "./css/Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="hero text-white p-3">
        <div className="row mt-5 p-2">
          <div className="col-md-4 px-3">
            <h2>
              <span className="text-info h1">TMS-</span> <br />
              Tourism Management System
            </h2>
            <div className="d-flex gap-4 my-5">
              <Link
                className="btn btn-outline-light p-3 px-5 f-1"
                to={"/gest/ToursPackages"}
              >
                Book Now
              </Link>
              <Link
                className="btn btn-secondary p-3 px-5 shadow-0 f-3"
                to={"/gest/Enquiry"}
              >
                Enquiry For Backages
              </Link>
            </div>
            <div className="pb-3">
              <p className="">
                It's a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
