import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./NavigationBar/AdminNavbar";
import { UserNavbar } from "./NavigationBar/UserNavbar";

export const RootLayout = () => {
  return (
    <Fragment>
      <div>
        <UserNavbar />
        {/* <AdminNavbar /> */}
        <Outlet />
      </div>
    </Fragment>
  );
};
