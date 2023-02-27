import { Fragment } from "react";
import { FlightSearchForm } from "./FlightSearchForm";
import cssStyle from "./Home.module.css";
import { Practice } from "./practice";

export const Home = () => {
  return (
    <Fragment>
      <div>
        <h2>Home Page</h2>
        {/* <Practice /> */}
        <FlightSearchForm />
      </div>
    </Fragment>
  );
};
