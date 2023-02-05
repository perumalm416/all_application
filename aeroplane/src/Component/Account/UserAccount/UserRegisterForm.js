import { Fragment } from "react";
import cssStyle from "./UserAccountForm.module.css";

export const UserRegister = (props) => {
  return (
    <Fragment>
      <form className={cssStyle.userForm}>
        <h3>User Register Form</h3>
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

        <button className={cssStyle.signBtn} type="submit">Register</button>
        <hr/>or
        <p>Do have an account? <span onClick={()=>props.isNewUserForm(false)}>Login</span></p>
      </form>

    </Fragment>
  );
};
