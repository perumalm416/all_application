import { Fragment } from "react";
import { AccountPage } from "../../Component/Account/Account";
import cssStyle from "./MainNavigation.module.css";
// import {} from "../../../public/Image"

export const MainNavigation = () => {
  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div >
          <img src="../../../public/Image/logo.png" width="300"/>
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
