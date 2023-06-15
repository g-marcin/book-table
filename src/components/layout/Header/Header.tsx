import { FC } from "react";
import { Menu } from "react-feather";
import styles from "./header.module.css";

type HeaderProps = {
  toggleMenu: () => void;
};

export const Header: FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <img src="/kongsberg_logosvg.jpg" alt="" className={styles.logoImage} />
        <span> Kongsberg-table</span>
      </a>
      <button>
        <Menu className={styles.menu} onClick={toggleMenu} />
      </button>
    </header>
  );
};
