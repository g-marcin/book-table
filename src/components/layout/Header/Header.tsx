import { FC } from "react";
import { Menu } from "react-feather";
import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <img src="/kongsberg_logosvg.jpg" alt="" className={styles.logoImage} />
        <span> Kongsberg-table</span>
      </a>
      <a href="">
        <Menu className={styles.menu} />
      </a>
    </header>
  );
};
