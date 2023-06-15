import { FC, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../../contexts/";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
  const { bookId, author } = useParams();
  const { presentAuthor, presentRecordSetter } = useContext(BookContext);
  const navigate = useNavigate();
  return (
    <nav className={styles["nav"]}>
      {
        <NavLink
          to="/"
          onClick={() => {
            presentRecordSetter("");
            navigate("/");
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
