import { NavLink } from "react-router-dom";
import cssStyle from "./Menubar.module.css";

export const AdminMenubar = (props) => {

  return (
    <div >      
        <div className={cssStyle.menubarModel} onClick={()=>props.onMenubarHandler()}/>
        <div className={cssStyle.container}>
          <button className={cssStyle.profilerBtn}>ProfilerEdit</button>
          <button className={cssStyle.closeBtn} onClick={()=>props.onMenubarHandler()}>X</button>
          <ul className={cssStyle.menuBtn}>
            <li><NavLink to="dashboard"  className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>Dashboard</NavLink></li>
            <li><NavLink to="add-new-flight" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>AddFlight</NavLink></li>
            <li><NavLink to="flight-list" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>FlightList</NavLink></li>
            <li><NavLink to="flight-fqa" className={({isActive})=>isActive?cssStyle.active:cssStyle.unActive}>FQA</NavLink></li>
          </ul>
      </div>
    </div>
  );
};
                                                 