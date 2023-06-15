import { FC } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { X } from "react-feather";
import styles from "./slider.module.css";

type SliderProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Slider: FC<SliderProps> = ({ isOpen, toggleMenu }) => {
  return (
    <CSSTransition in={isOpen} timeout={100} classNames={styles["menu-transition"]} unmountOnExit>
      <div className={styles["sliding-menu"]}>
        <button onClick={toggleMenu}>
          <X />
        </button>
        <ul>
          <li>
            {" "}
            <NavLink to={"/"}>1</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/"}>1</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/"}>1</NavLink>
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};
