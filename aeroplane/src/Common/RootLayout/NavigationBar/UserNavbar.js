import { Fragment } from "react";
import cssStyle from "./Navbar.module.css";
// import {} from "../../Images/logo1"
export const UserNavbar = () => {
  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div>
          <img src="./logo.png" alt="logo" width="50" />
          <span>BS Airway</span>
        </div>
        <ul className={cssStyle.navTabs}>
          <li>Home</li>
          <li>ContactUs</li>
        </ul>
        <div>
          <button className={cssStyle.navBtn}>Login</button>
          <button className={cssStyle.navBtn}>Profiler</button>
        </div>
      </nav>
    </Fragment>
  );
};
