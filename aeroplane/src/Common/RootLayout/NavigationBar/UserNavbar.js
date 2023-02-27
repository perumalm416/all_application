import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cssStyle from "./Navbar.module.css";
import { UserMenubar } from "./UserMenubar";

export const UserNavbar = () => {
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
          <li> <NavLink to="/" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>Home</NavLink></li>
          <li> <NavLink to="contact-us" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>ContactUs</NavLink></li>
        </ul>
        <div>
          <button className={cssStyle.loginBtn}>Login</button>          
          <button className={cssStyle.menubarBtn} type="button" onClick={onMenubarHandler}>Menubar</button>         
        </div>       
      </nav>
      {isMenubarShow&&<UserMenubar onMenubarHandler={onMenubarHandler}/>}
    </Fragment>
  );
};
