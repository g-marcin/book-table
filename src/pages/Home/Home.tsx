import { FC } from "react";
import { BooksTable } from "../../modules";
import styles from "./Home.module.css";
import { Details } from "../../modules/Details";
import { useParams } from "react-router-dom";

export const Home: FC = () => {
  const { author, bookId } = useParams();
  return (
    <main className={styles.main}>
      <BooksTable />
      {author ? <Details /> : <div>Please choose table item...</div>}
    </main>
  );
};
