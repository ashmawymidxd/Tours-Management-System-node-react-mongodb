import { GestNavbar, GestFooter } from "../../Sections";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <GestNavbar />
      <Outlet />
      <GestFooter />
    </main>
  );
}

