import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../../contexts";
import { MappedBookObject } from "../../../types";
import styles from "./authorDetails.module.css";

export const AuthorDetails: FC = () => {
  const { fetchedBooksData, presentAuthor, presentDescriptionSetter } = useContext(BookContext);
  const showBookDetails = (id: string) => {
    presentDescriptionSetter(id);
  };
  const navigate = useNavigate();

  return (
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
  );
};
