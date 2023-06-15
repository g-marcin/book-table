import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BooksTable } from "../../modules";
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <main className={styles.main}>
      <BooksTable />
      <Outlet />
    </main>
  );
};
