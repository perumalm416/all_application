import { Fragment } from "react";
import { FlightSearchForm } from "../../../Component/Flight/FlightSearchForm";
import cssStyle from "./Home.module.css";

export const Home = () => {
  return (
    <Fragment>
      <div className={cssStyle.backgroundImage} >
        <h2>Home Page</h2>
        <FlightSearchForm />
      </div>
    </Fragment>
  );
};
