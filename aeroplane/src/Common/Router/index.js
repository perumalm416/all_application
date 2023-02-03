import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../RootLayout/RootLayout";


export const RouterConfigure=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>
    }
])