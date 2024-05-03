import { FC, useState } from "react";
import { Menu } from "react-feather";
import { Slider } from "../Slider";
import { SubHeader } from "../SubHeader";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import SvgBook from "../../../assets/images/SvgBook";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";

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
      </header>
      <SubHeader />
    </>
  );
};
