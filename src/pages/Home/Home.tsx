import { FC } from "react";
import { BooksTable } from "../../modules";
import styles from "./Home.module.css";
import { Details } from "../../modules/Details";

export const Home: FC = () => {
  return (
    <main className={styles.main}>
      <Details />
      <BooksTable />
    </main>
  );
};
