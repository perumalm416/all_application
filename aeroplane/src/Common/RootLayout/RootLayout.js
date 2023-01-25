import { Fragment } from "react";
import { AccountPage } from "../../Component/Account/Account";
import { MainNavigation } from "./MainNavigation";

export const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <h2>RootLayout page</h2>
      
    </Fragment>
  );
};
