import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AuthorsTable } from "../../modules";

import styles from "./booksPage.module.css";

const BooksPage: FC = () => {
  return (
    <main className={styles.main}>
      <AuthorsTable />
      <Outlet />
    </main>
  );
};

export default BooksPage;
