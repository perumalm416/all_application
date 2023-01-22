import { Fragment } from "react";
import cssStyle from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div >
          <img src="https://seeklogo.com/images/B/BS-logo-A1D074EA09-seeklogo.com.png" width="30"/>
          <span>BS Airway</span>
        </div>
        <ul className={cssStyle.navTabs}>
          <li>Home</li>
          <li>ContactUs</li>
        </ul>
        <div >
          <button className={cssStyle.navBtn}>Login</button>
          <button className={cssStyle.navBtn}>Profiler</button>
        </div>
      </nav>
    </Fragment>
  );
};
