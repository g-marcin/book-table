import { FC } from "react";
import { useBookDetails } from "../../../hooks";
import { useParams } from "react-router-dom";
import styles from "./bookDetails.module.css";
import { DetailsPlaceholder } from "../../../components";

const BookDetails: FC = () => {
  const { description: bookDescription, title: bookTitle } = useBookDetails();
  const { author, bookId } = useParams();
  return (
    <div className={styles["bookDetails"]}>
      {bookId ? (
        <>
          <h2>{bookTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: bookDescription }}></p>
        </>
      ) : (
        <DetailsPlaceholder name={"book"} />
      )}
    </div>
  );
};
export default BookDetails;
