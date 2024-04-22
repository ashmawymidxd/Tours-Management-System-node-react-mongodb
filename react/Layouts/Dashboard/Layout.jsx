import { SideBar, DashboardFooter, DashboardNavBar } from "../../Sections";
import { Outlet } from "react-router-dom";
import "./css/layout.css";

export default function Layout() {
  return (
    <main>
      <div className="">
        <div className="d-flex">
          <div className="custom-side-bar">
            <SideBar />
          </div>
          <div className="main-content overflow-y-scroll">
            <DashboardNavBar />
            <Outlet />
            <DashboardFooter />
          </div>
        </div>
      </div>
    </main>
  );
}
