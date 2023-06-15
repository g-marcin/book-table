import { FC, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../../contexts/";
import { Home } from "react-feather";
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
          className={styles.homeCrumb}
        >
          <span className={styles.bigCrumb}>Home</span>
          <Home className={styles.smallCrumb} />
        </NavLink>
      }
      {author && (
        <NavLink to={`/${author}`}>
          {"> "}
          {presentAuthor}
        </NavLink>
      )}

      {bookId && (
        <NavLink to={`/${author}/${bookId}`} className={styles.bookTitleCrumb}>
          {" "}
          {"> "}
          {bookId}
        </NavLink>
      )}
    </nav>
  );
};
