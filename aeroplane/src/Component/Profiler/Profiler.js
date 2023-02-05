import { Fragment } from "react";
import cssStyle from "./Profiler.module.css";

export const MyProfiler = () => {
  return (
    <Fragment>
      <div className={cssStyle.backDrop}/>
      <h2>Profiler Page</h2>
      <div className={cssStyle.profiler}>
        <img src="" alt="Profiler_Image" width="100" />
        <p>firstName LastName</p>
        <p>Email Address</p>
        <p>Mobile Number</p>
        <p>Address Details</p>
        <p>Setting</p>
      </div>
    </Fragment>
  );
};
