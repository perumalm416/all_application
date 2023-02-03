import { RouterProvider } from "react-router-dom";
import { RootLayout } from "./Common/RootLayout/RootLayout";
import { RouterConfigure } from "./Common/Router";

function App() {
  return (
    <div className="">
      <RouterProvider router={RouterConfigure}/>
    </div>
  );
}
export default App;
