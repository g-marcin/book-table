import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BooksTable } from "../../modules";

import styles from "./booksPage.module.css";

const BooksPage: FC = () => {
  return (
    <main className={styles.main}>
      <BooksTable />
      <Outlet />
    </main>
  );
};

export default BooksPage;
