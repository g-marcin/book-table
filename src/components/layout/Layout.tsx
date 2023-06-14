import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SubHeader } from "./SubHeader";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </>
  );
};
