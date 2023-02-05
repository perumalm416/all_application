import { createBrowserRouter } from "react-router-dom";
import { ContactUsPage } from "../../Pages/User/ContactUs/ContactUs";
import { RootLayout } from "../../Common/RootLayout/RootLayout";
import { Home } from "../../Pages/User/Home/Home";
import { AccountPage } from "../Account/Account";

export const RouterConfigure = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "contact-us", element: <ContactUsPage /> },
      { path: "account", element: <AccountPage />},
    ],
  },
]);
