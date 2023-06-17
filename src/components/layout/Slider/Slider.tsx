import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { X, Sun, Moon } from "react-feather";
import styles from "./slider.module.css";

type SliderProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Slider: FC<SliderProps> = ({ isOpen, toggleMenu }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <CSSTransition in={isOpen} timeout={0} classNames={styles["menu-transition"]} unmountOnExit>
      <div className={styles["sliding-menu"]}>
        <button onClick={toggleMenu}>
          <X />
        </button>
        <ul>
          <li>
            <button
              onClick={() => {
                setIsDark(!isDark);
                document.body.setAttribute("data-bs-theme", `${isDark ? "dark" : "light"}`);
              }}
            >
              {isDark ? <Moon /> : <Sun />}
            </button>
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};
