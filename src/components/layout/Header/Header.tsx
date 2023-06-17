import { FC, useState } from "react";
import { Menu } from "react-feather";
import { Slider } from "../Slider";
import { SubHeader } from "../SubHeader";
import styles from "./header.module.css";

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <a className={styles.logo} href="/">
          <img src="/kongsberg_logosvg.jpg" alt="" className={styles.logoImage} />
          <span>Kongsberg-table</span>
        </a>
        <button>
          <Menu
            className={styles.menu}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </button>
        <Slider
          isOpen={isOpen}
          toggleMenu={() => {
            setIsOpen(false);
          }}
        />
      </header>
      <SubHeader />
    </>
  );
};
