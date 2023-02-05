import { Fragment } from "react";
import { FlightSearchForm } from "./FlightSearchForm";
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
