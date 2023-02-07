import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menubar } from "./Menubar";
import cssStyle from "./Navbar.module.css";

export const AdminNavbar = () => {
const [isMenubarShow,setIsMenubarShow]=useState(false);
  const onMenubarHandler=()=>{
    setIsMenubarShow(!isMenubarShow)
  }
  return (
    <Fragment>
      <nav className={cssStyle.mainNav}>
        <div className={cssStyle.websiteLogo}>
          {/* <img src="./logo.png" alt="logo" width="50" /> */}
          <Link className={cssStyle.logoName} to="dashboard">BS Airway</Link>
        </div>       
        <ul className={cssStyle.navTabs}>         
          <li> <NavLink to="dashboard" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>Dashboard</NavLink></li>
          <li> <NavLink to="add-new-flight" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>AddFlight</NavLink></li>
          <li> <NavLink to="flight-list" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>FlightList</NavLink></li>
          <li> <NavLink to="flight-fqa" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>FQA</NavLink></li>
        </ul>
        <div>
          <button className={cssStyle.loginBtn}>Login</button>          
          <button className={cssStyle.menubarBtn} type="button" onClick={onMenubarHandler}>Menubar</button>         
        </div>
      </nav>
      {isMenubarShow&&<Menubar onMenubarHandler={onMenubarHandler}/>}
    </Fragment>
  );
};
