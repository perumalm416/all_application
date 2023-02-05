import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import cssStyle from "./Navbar.module.css";

export const UserNavbar = () => {


  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div>
          <img src="./logo.png" alt="logo" width="50" />
          <Link className={cssStyle.logoName} to="/">BS Airway</Link>
        </div>
        <ul className={cssStyle.navTabs}>         
          <li> <NavLink to="/" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>Home</NavLink></li>
          <li> <NavLink to="contact-us" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>ContactUs</NavLink></li>
        </ul>
        <div>
          <button className={cssStyle.navBtn}>Login</button>
          {/* <select className={`${cssStyle.dropdown} ${cssStyle.navBtn}`} value={accountType} onChange={onAccountHandler}>
           <option>User</option>
           <option>Admin</option>
          </select> */}
          <button className={cssStyle.navBtn}>Profiler</button>
          <div>
          <ul >         
          <li> <NavLink to="/" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>Home</NavLink></li>
          <li> <NavLink to="contact-us" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>ContactUs</NavLink></li>
        </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
