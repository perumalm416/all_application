import { Fragment } from "react";
import cssStyle from "./Passenger.module.css";

export const PassengerSignUp = () => {
  return (
    <Fragment>
      <form className={cssStyle.signForm}>
        <div className={cssStyle.singleField}>
          <div className="">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" name="firstName" />
          </div>
          <div>
            <label htmlFor="LastName">Last Name</label>
            <input id="LastName" type="text" name="LastName" />
          </div>
          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <input id="dob" type="date" name="dob" />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input id="mobile" type="number" name="mobile" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <input
            id="streetAddress"
            type="text"
            name="streetAddress"
            placeholder="streetAddress"
          />
          <div className={cssStyle.multiField}>
            <input id="city" type="text" name="city" placeholder="city" />
            <input id="state" type="text" name="state" placeholder="state" />
            <input
              id="zipCode"
              type="number"
              name="zipCode"
              placeholder="zipCode"
            />
          </div>
        </div>

        <button className={cssStyle.signBtn} id="signUp" type="submit">
          Sign Up
        </button>
      </form>
    </Fragment>
  );
};
