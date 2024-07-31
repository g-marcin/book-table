import { FC, useState } from "react";
import { Slider } from "../Slider";
import { SubHeader } from "../SubHeader";
import styles from "./header.module.css";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";
import { Backdrop } from "../Slider/Backdrop";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Logo/>
        <Hamburger setIsMenuOpen={setIsMenuOpen}/>
        <Slider
          isOpen={isMenuOpen}
          toggleMenu={() => {
            setIsMenuOpen(false);
          }}
        />
        <Backdrop isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
      </header>
      <SubHeader />
    </>
  );
};
