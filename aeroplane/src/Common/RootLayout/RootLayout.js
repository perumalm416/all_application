import { Fragment } from "react";
import { AdminNavbar } from "./NavigationBar/AdminNavbar";
import { UserNavbar } from "./NavigationBar/UserNavbar";
import cssStyle from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <Fragment>
      <div>
        <div className={cssStyle.headNavbar}>
          <UserNavbar />
        </div>
        <h2>RootLayout page</h2>
        <AdminNavbar />
      </div>
    </Fragment>
  );
};
