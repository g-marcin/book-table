import { FC, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { X, Sun, Moon } from "react-feather";
import { ThemeContext } from "../../../contexts";
import styles from "./slider.module.css";
import { Divider } from "../../Divider";

type SliderProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Slider: FC<SliderProps> = ({ isOpen, toggleMenu }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <>
    <CSSTransition in={isOpen} timeout={1} classNames={styles["menu-transition"]} unmountOnExit>
      <div className={styles["sliding-menu"]}>
        <button onClick={toggleMenu}>
          <X />
        </button>
        <Divider />
        <ul>
          <li>
            <button
              onClick={() => {
                setIsDark(isDark);
              }}
            >
              {isDark ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </div>
    </CSSTransition>
    </>
  );
};
