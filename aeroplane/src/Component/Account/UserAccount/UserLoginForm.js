import { Fragment, useState } from "react";
import cssStyle from "./UserAccountForm.module.css"

export const UserLoginForm = (props) => {
  const [credential,setCredential]=useState({username:"",password:""});

  const onUsernameHandler=(event)=>{
    setCredential(prevState=>{
      return{...prevState,username:event.target.value}})
  }
  const onPasswordHandler=(event)=>{
    setCredential(prevState=>{
      return{...prevState,password:event.target.value}
    })
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    const userCredential={
      username:credential.username,
      password:credential.password,
    }
    console.log(userCredential);
  }
  return (
    <Fragment>
      <form  className={cssStyle.userForm} onSubmit={onSubmitHandler}>
        <h3>User Login Form</h3>
        <label htmlFor="username">Username :</label>
        <input id="username" type="email" name="username" placeholder="Email Address" required onChange={onUsernameHandler}/>
        <label htmlFor="pwd">Password :</label>
        <input id="pwd" type="password" name="password" placeholder="password" required onChange={onPasswordHandler}/>
        <button className={cssStyle.signBtn} type="submit" >Login</button>
        <hr/>or
        <p>Don't have an account? <span onClick={()=>props.isNewUserForm(true)}>Register</span></p>
      </form>
    </Fragment>
  );
};
