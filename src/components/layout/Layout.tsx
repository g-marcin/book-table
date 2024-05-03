import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./layout.module.css";

export const Layout: FC = () => {
  return (
    <div className={styles.Page}>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};
