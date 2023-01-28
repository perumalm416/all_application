import { Fragment } from "react";
import cssStyle from "./Passenger.module.css"

export const PassengerSignIn = () => {
  return (
    <Fragment>
      <form className={cssStyle.signForm}>
        <lable htmlFor="username">Username :</lable>
        <input id="username" type="email" name="username" />
        <label htmlFor="pwd">Password :</label>
        <input id="pwd" type="password" name="password"/>
        <button className={cssStyle.signBtn} type="submit" role="submit">Sign In</button>
        <hr/>or
        <p>Don't have an account? <a href="#register">Sign Up</a></p>
      </form>
    </Fragment>
  );
};
