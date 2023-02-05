import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./NavigationBar/AdminNavbar";
import { UserNavbar } from "./NavigationBar/UserNavbar";
import cssStyle from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <Fragment>
      <div className={cssStyle.headNavbar}>
        {/* <UserNavbar /> */}
        <AdminNavbar/>
        <div>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
