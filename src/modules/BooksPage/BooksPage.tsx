import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AuthorsTable } from "../../modules";
import styles from "./booksPage.module.css";
import { Divider } from "../../components";

const BooksPage: FC = () => {
  return (
    <div className={styles.booksPageWrapper}>
      <AuthorsTable />
      <Outlet />
      <Divider />
    </div>
  );
};

export default BooksPage;
