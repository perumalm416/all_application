import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { RouterConfigure } from "./Component/Router";
import "./App.css"
function App() {
  return (
    <Fragment>
      <div className="background">
        <RouterProvider router={RouterConfigure} />
      </div>
    </Fragment>
  );
}
export default App;
