import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Page } from "./Page";

export const Layout: FC = () => {
  return (
   <Page>
      <Header />
        <Outlet />
      <Footer />
   </Page>
  );
};
