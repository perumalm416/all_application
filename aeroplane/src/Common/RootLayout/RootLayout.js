import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./NavigationBar/AdminNavbar";
import { UserNavbar } from "./NavigationBar/UserNavbar";
import cssStyle from "./RootLayout.module.css";

export const RootLayout = () => {
  const [isUserAccount, setIsUserAccount] = useState(false);

  const pageLayout = isUserAccount ? cssStyle.userLayout : cssStyle.adminLayout;
  
  return (
    <Fragment>
      <div className={pageLayout}>
        {/* <UserNavbar /> */}
        <AdminNavbar />
        <Outlet />
      </div>
    </Fragment>
  );
};
