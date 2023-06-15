import { FC } from "react";
import { useBookDetails } from "../../../hooks";
import styles from "./bookDetails.module.css";

export const BookDetails: FC = () => {
  const { bookDescription, bookTitle } = useBookDetails();
  return (
    <div>
      <h2>{bookTitle}</h2>
      <p className={styles["bookDetails"]} dangerouslySetInnerHTML={{ __html: bookDescription }}></p>
    </div>
  );
};
