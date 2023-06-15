import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SubHeader } from "./SubHeader";
import { Slider } from "./Slider";

export const Layout: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header
        toggleMenu={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Slider
        isOpen={isOpen}
        toggleMenu={() => {
          setIsOpen(!isOpen);
        }}
      />
      <SubHeader />
      <Outlet />
      <Footer />
    </>
  );
};
