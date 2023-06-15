import { FC } from "react";
import { BooksTable } from "../../modules";
import { Details } from "../../modules/Details";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

export const Home: FC = () => {
  const { author } = useParams();
  return (
    <main className={styles.main}>
      {<BooksTable /> ? <BooksTable /> : <div>Loading...</div>}
      {author ? <Details /> : <div>Please choose table item...</div>}
    </main>
  );
};
