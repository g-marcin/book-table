import { FC, useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import { MappedBookObject } from "../../types";
import styles from "./details.module.css";
import { useBookDetails } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";

export const Details: FC = () => {
  const { fetchedBooksData, presentAuthor, presentDescriptionSetter, presentDescription } = useContext(BookContext);
  const showBookDetails = (id: string) => {
    presentDescriptionSetter(id);
  };
  const { bookDescription } = useBookDetails();
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
      <div className={styles["authorDetails"]}>
        {presentAuthor && (
          <div className={styles["detailsItem"]}>
            <div>Title</div>
            <div>Cover</div>
          </div>
        )}
        {fetchedBooksData
          .filter((book: MappedBookObject) => book.author === presentAuthor)
          .map((book: MappedBookObject) => {
            return (
              <>
                <button
                  className={styles["detailsItem"]}
                  onClick={() => {
                    showBookDetails(book.id);
                    navigate(`/${presentAuthor}/${book.title}`);
                  }}
                >
                  <p>{book.title}</p>
                  <img src={book.image} alt="" />
                </button>
              </>
            );
          })}
      </div>
      {bookId && <div className={styles["bookDetails"]} dangerouslySetInnerHTML={{ __html: bookDescription }}></div>}
    </div>
  );
};
