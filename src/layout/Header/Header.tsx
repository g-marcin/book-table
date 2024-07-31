import { FC, useState } from "react";
import { Menu } from "../Menu";
import { SubHeader } from "../SubHeader";
import styles from "./header.module.css";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";
import { DropBack } from "../Menu/DropBack";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Logo/>
        <Hamburger setIsMenuOpen={setIsMenuOpen}/>
        <Menu
          isOpen={isMenuOpen}
          toggleMenu={() => {
            setIsMenuOpen(false);
          }}
        />
        <DropBack isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
      </header>
      <SubHeader />
    </>
  );
};
