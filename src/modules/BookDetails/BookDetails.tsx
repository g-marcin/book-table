import { FC } from "react";
import { useBookDetails } from '../../hooks';
import { Loader } from "../../components";
import styles from "./bookDetails.module.css";

const BookDetails: FC = () => {
  const bookDetails = useBookDetails();
  return (
    <>
      {bookDetails.description ? (
        <div className={styles.bookDetails}>
            <h2>{bookDetails.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: bookDetails.description }}></p>
        </div>
      ) : (
          <Loader />
      )}
    </>
  );
};
export default BookDetails;
