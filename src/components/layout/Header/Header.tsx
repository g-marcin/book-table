import { FC, useState } from "react";
import { Menu } from "react-feather";
import { Slider } from "../Slider";
import { SubHeader } from "../SubHeader";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import SvgBook from "../../../assets/images/SvgBook";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <SvgBook fill={'white'} width={35} height={35}/>
          <span className="text-decoration-none">book-table</span>
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
