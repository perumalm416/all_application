import { createBrowserRouter } from "react-router-dom";
import { ContactUsPage } from "../Pages/User/ContactUs/ContactUs";
import { RootLayout } from "../Common/RootLayout/RootLayout";
import { Home } from "../Pages/User/Home/Home";
import { AccountPage } from "../Component/Account/Account";
import { SearchFlightInfo } from "../Pages/User/UserFlightList/SearchFlightInfo";
import { AddFlightForm } from "../Pages/Admin/AddFlightForm";
import { FlightList } from "../Pages/Admin/FlightList";
import { FlightFQA } from "../Pages/Admin/FlightFQA";
import { Dashboard } from "../Pages/Admin/Dashboard";
import React, { Suspense } from "react";

// const FlightList=React.lazy(()=>import("../Pages/Admin/FlightList"));

export const RouterConfigure = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <RootLayout />,
        children: [
          { path:"", element: <Home /> },
          { path: "contact-us", element: <ContactUsPage /> },
          { path: "account", element: <AccountPage /> },
        ],
      },
      { path: "flight-search-info", element: <SearchFlightInfo /> },
    ],
  },
  {
    path: "/flight",
    element: <RootLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-new-flight", element: <AddFlightForm /> },
      { path: "flight-list", element: <FlightList /> },
      { path: "flight-fqa", element: <FlightFQA /> },
    ],
  },
]);
