import { FC } from "react";
import { useBookDetails } from "../../../hooks";
import styles from "./bookDetails.module.css";

export const BookDetails: FC = () => {
  const { bookDescription, bookTitle } = useBookDetails();
  return (
    <div className={styles["bookDetails"]}>
      <h2>{bookTitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: bookDescription }}></p>
    </div>
  );
};
