import { Fragment } from "react";
import { PassengerForm } from "../../Common/Passenger/PassengerForm";
import { MyProfiler } from "../../Common/Profiler/Profiler";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AccountPage = () => {
  return (
    <Fragment>
      {/* <h2>Account Page</h2> */}
      <SignIn />
      <SignUp/>
      {/* <MyProfiler/> */}
      <PassengerForm/>
    </Fragment>
  );
};
