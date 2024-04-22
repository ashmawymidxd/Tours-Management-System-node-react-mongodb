import React, { useContext, useState } from "react";
import "./css/custom-sidbar.css";
import { Link, useLocation, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

function SideBar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();

  function logout() {
    fetch("http://localhost:4000/api/auth/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/gest/home"} />;
  }

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <div
      className="card rounded-0 p-2 custom-sidbar"
      style={{ height: "100vh" }}
    >
      <div className="px-3 text-white border-bottom mb-3">
        <div className="d-flex align-items-center gap-3 justify-content-between">
          <div className="TMS">
            <i class="fa-solid fa-plane-departure"></i>
            <h4 className="">TMS</h4>
          </div>
          <div className="hide">
            <i role="button" className="fa-solid fa-bars fa-xl"></i>
          </div>
        </div>
      </div>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/Home"
        )}`}
        to={"/dashboard/Home"}
      >
        <i className="fa-solid fa-house fa-xl"></i>
        <span>Dashboard</span>
      </Link>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/CreatePackage"
        )}`}
        to={"/dashboard/CreatePackage"}
      >
        <i className="fa-solid fa-calendar-plus fa-xl"></i>
        <span>Create Package</span>
      </Link>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/ManagePackages"
        )}`}
        to={"/dashboard/ManagePackages"}
      >
        <i className="fa-solid fa-list-check fa-xl"></i>
        <span>Manage Packages</span>
      </Link>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/ManageBooking"
        )}`}
        to={"/dashboard/ManageBooking"}
      >
        <i className="fa-solid fa-book fa-xl"></i>
        <span>Manage Bookings</span>
      </Link>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/ManageIssues"
        )}`}
        to={"/dashboard/ManageIssues"}
      >
        <i className="fa-solid fa-box-tissue fa-xl"></i>
        <span>Manage Issues</span>
      </Link>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/ManageEnquires"
        )}`}
        to={"/dashboard/ManageEnquires"}
      >
        <i className="fa-solid fa-toolbox fa-xl"></i>
        <span>Manage Enquires</span>
      </Link>
      <Link
        className={`navlink p-3 rounded-1 d-flex gap-4 align-items-center ${isActive(
          "/dashboard/ManagePages"
        )}`}
        to={"/dashboard/ManagePages"}
      >
        <i className="fa-solid fa-gears fa-xl"></i>
        <span>Manage Pages</span>
      </Link>
      <div
        className="logout footer card p-3"
        style={{ background: "rgba(255,255,255,1)" }}
      >
        <button className="btn btn-primary shadow-0 my-2" onClick={logout}>
          <div className="d-flex justify-content-between">
            <strong>Logout</strong>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </button>
        usr:- {userInfo?.email}
      </div>
    </div>
  );
}

export default SideBar;
