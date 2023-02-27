import { Fragment, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { RouterConfigure } from "./Router";
import cssStyle from "./App.module.css";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [isUserAccount, setIsUserAccount] = useState(true);

  const pageLayout = isUserAccount ? cssStyle.userLayout : cssStyle.adminLayout;

  useEffect(() => {
    dispatch({ type: "FETCH_FLIGHT_INFO" });
  }, []);

  return (
    <Fragment>
      <div className={pageLayout}>
        <RouterProvider router={RouterConfigure} />
      </div>
    </Fragment>
  );
}
export default App;
