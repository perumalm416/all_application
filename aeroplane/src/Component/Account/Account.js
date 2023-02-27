import { Fragment, useState } from "react";
import { UserLoginForm } from "./UserAccount/UserLoginForm";
import { UserRegister } from "./UserAccount/UserRegisterForm";
import cssStyle from "./Account.module.css"

export const AccountPage = () => {
  const [isNewUser,setIsLoginForm]=useState(true);

  const onUserFormHandler=(status)=>{
    setIsLoginForm(status)
  }
  return (
    <Fragment>     
      <div id="accountId" className={cssStyle.account}>
      {isNewUser?<UserRegister isNewUserForm={onUserFormHandler}/>:<UserLoginForm isNewUserForm={onUserFormHandler}/>}
      </div>
    </Fragment>
  );
};
