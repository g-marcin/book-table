import { FC } from "react";
import { useBookDetails } from "../../../hooks";
import styles from "./bookDetails.module.css";

const BookDetails: FC = () => {
  const { description: bookDescription, title: bookTitle } = useBookDetails();
  return (
    <div className={styles["bookDetails"]}>
      <h2>{bookTitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: bookDescription }}></p>
    </div>
  );
};
export default BookDetails;
