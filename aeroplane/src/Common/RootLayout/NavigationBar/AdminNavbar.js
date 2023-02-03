import { Fragment } from "react";
import cssStyle from "./Navbar.module.css";

export const AdminNavbar = () => {
  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div>
        <img src="./logo.png" alt="logo" width="50" />
          <span>BS Airway</span>
        </div>
        <ul className={cssStyle.navTabs}>
          <li>Dashboard</li>
          <li>New Flight</li>
          <li>Flight List</li>
          <li>FQA</li>
        </ul>
        <div>
          <button className={cssStyle.navBtn}>Login</button>
          <button className={cssStyle.navBtn}>Profiler</button>
        </div>
      </nav>
    </Fragment>
  );
};
