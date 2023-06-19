import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AuthorsTable } from "../../modules";
import styles from "./booksPage.module.css";

const BooksPage: FC = () => {
  return (
    <>
      <AuthorsTable />
      <div className={styles.line}></div>
      <Outlet />
    </>
  );
};

export default BooksPage;
