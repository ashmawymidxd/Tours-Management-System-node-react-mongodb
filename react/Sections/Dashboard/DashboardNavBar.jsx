import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

function DashboardNavBar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
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
    window.location.href = "/gest/home";
  }

  return (
    <>
      <div className="card p-3 rounded mb-5 rounded-0">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex gap-3"></div>
          <div className="d-flex gap-3">
            <Link className="btn btn-outline-primary shadow-0">Profile</Link>
            <Link class="btn btn-light shadow-0" onClick={logout}>
              Logout {userInfo?.aaa} <i className="fas fa-out"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNavBar;
