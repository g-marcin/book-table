import { FC, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { X, Sun, Moon, User, BookOpen, Info} from "react-feather";
import { ThemeContext } from "../../contexts";
import styles_menu from "./menu.module.css";
import styles_transition from "./menu-transition.module.css"
type MenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Menu: FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <>
    <CSSTransition in={isOpen} timeout={1} classNames={styles_transition["menu-transition"]} unmountOnExit>
      <div className={`${styles_menu["sliding-menu"]} flex-col `}>
        <button onClick={toggleMenu} className="flex bg-black w-96 h-36">
          <span className="m-auto scale-150"><X/></span>
        </button>
            <button
              onClick={() => {
                setIsDark(isDark);
              }}
              className="flex bg-black w-96 h-36"
            >
              <span className="m-auto scale-150">{isDark ? <Sun /> : <Moon />}</span> 
            </button>
            <button onClick={toggleMenu} className="flex bg-black w-96 h-36">
          <span className="m-auto scale-150"><User/></span>
        </button>
        <button onClick={toggleMenu} className="flex bg-black w-96 h-36">
          <span className="m-auto scale-150"><BookOpen/></span>
        </button>
        <button onClick={toggleMenu} className="flex bg-black w-96 h-36">
          <span className="m-auto scale-150"><Info/></span>
        </button>
      </div>
    </CSSTransition>
    </>
  );
};
