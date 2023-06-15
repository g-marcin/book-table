import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import { AuthorDetails } from "./AuthorDetails";
import { BookDetails } from "./BookDetails/BookDetails";

export const Details: FC = () => {
  const { bookId } = useParams();

  return (
    <div className={styles.mainWrapper}>
      <AuthorDetails />
      {bookId && <BookDetails />}
    </div>
  );
};
