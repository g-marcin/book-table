import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AuthorsTable } from "../../modules";
import styles from "./booksPage.module.css";

const BooksPage: FC = () => {
  return (
    <div className={styles.booksPageWrapper}>
      <AuthorsTable />
      <Outlet />
      <div className={styles.line}></div>
    </div>
  );
};

export default BooksPage;
