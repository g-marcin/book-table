import { FC, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../../contexts/BookContext";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
  const { bookId, author } = useParams();
  const navigate = useNavigate()
  const { presentAuthor, presentBook, presentBookSetter } = useContext(BookContext);

  return (
    <nav className={styles["nav"]}>
      {
        <NavLink
          to="/"
          onClick={() => {
            presentBookSetter("");
            navigate("/")
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
