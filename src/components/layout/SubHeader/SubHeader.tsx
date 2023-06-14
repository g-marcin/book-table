import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BookContext } from "../../../contexts/BookContext";
import { useBookDetails } from "../../../hooks";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
  const { bookId, author } = useParams();
  const { presentAuthor, presentBook, presentBookSetter } = useContext(BookContext);

  return (
    <nav className={styles["nav"]}>
      {
        <NavLink
          to="/"
          onClick={() => {
            presentBookSetter("");
          }}
        >
          Home
        </NavLink>
      }

      {author && (
        <NavLink to={`/${author}`}>
          {"> "}
          {presentAuthor}
        </NavLink>
      )}

      {bookId && (
        <NavLink to={`/${author}/${bookId}`}>
          {" "}
          {"> "}
          {bookId}
        </NavLink>
      )}
    </nav>
  );
};
