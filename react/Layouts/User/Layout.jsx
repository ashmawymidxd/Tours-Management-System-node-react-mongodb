import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
function Layout() {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="card mt-5 shadow-0 rounded-0 p-5">
      <div className="row">
        <div className="col-md-3">
          auth user / user layout
        </div>
        <div className="col-md-6">
          <div className="d-flex gap-3">
            <Link className="nav-link p-2" to={"/user/Myprofile"}>
              MyProfile
            </Link>
            <Link className="nav-link p-2" to={"/user/ChangePassword"}>
              Change Password
            </Link>
            <Link className="nav-link p-2" to={"/user/MyTourHistory"}>
              MyTour History
            </Link>
            <Link className="nav-link p-2" to={"/user/IssueTickets"}>
              Issue Tickets
            </Link>
          </div>
        </div>
        <div className="col-md-3">{userInfo?.username}</div>
      </div>
    </div>
  );
}

export default Layout;
