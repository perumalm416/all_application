import { Fragment } from "react";
import { useDispatch } from "react-redux";

export const ContactUsPage = () => {
  const dispatch=useDispatch();
  const onTakeBtnHandler=()=>{
    console.log("takebtn handler");
  dispatch({type:"TAKE_EEFFECT",payload:{name:"perumal"}})
  }
  const onTookBtnHandler=()=>{
    console.log("tookbtn handler");
  dispatch({type:"TOOK_EEFFECT",payload:{name:"TOOK"}})
  }
  return (
    <Fragment>
      <h2>ContactUs Page</h2>
      <details>
        <summary>heading</summary>
        <p>jaslkfj lksadjflksdacfldsajklfjsdofjweklfj</p>
        <time></time>
      </details>

      <button onClick={onTakeBtnHandler}>Take Button</button>
      <button onClick={onTookBtnHandler}>took Button</button>
    </Fragment>
  );
};
