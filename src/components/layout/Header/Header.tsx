import { FC, useState } from "react";
import { Menu } from "react-feather";
import { Slider } from "../Slider";
import { SubHeader } from "../SubHeader";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <img src="/kongsberg_logo.jpg" alt="logo" className={styles.logoImage} />
          <span className="text-decoration-none">Kongsberg-table</span>
        </Link>
        <button
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <Menu className={styles.menu} />
        </button>
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
