import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import cssStyle from "./Navbar.module.css";

export const AdminNavbar = () => {
  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div>
          <img src="./logo.png" alt="logo" width="50" />
          <Link className={cssStyle.logoName} to="dashboard">BS Airway</Link>
        </div>
        <ul className={cssStyle.navTabs}>         
          <li> <NavLink to="dashboard" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>Dashboard</NavLink></li>
          <li> <NavLink to="add-new-flight" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>AddFlight</NavLink></li>
          <li> <NavLink to="flight-list" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>FlightList</NavLink></li>
          <li> <NavLink to="flight-fqa" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>FQA</NavLink></li>
        </ul>
        <div>
          <button className={cssStyle.navBtn}>Login</button>
          {/* <select className={`${cssStyle.dropdown} ${cssStyle.navBtn}`} value={accountType} onChange={onAccountHandler}>
           <option>User</option>
           <option>Admin</option>
          </select> */}
          <button className={cssStyle.navBtn}>Profiler</button>
        </div>
      </nav>
    </Fragment>
  );
};
