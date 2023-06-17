import { FC } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Home } from "react-feather";
import { useBookDetails } from "../../../hooks";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
  const { bookId, author } = useParams();
  const { bookTitle } = useBookDetails();
  const navigate = useNavigate();
  return (
    <nav className={styles["nav"]}>
      {
        <NavLink
          to="/"
          onClick={() => {
            navigate("/");
          }}
          className={styles.homeCrumb}
        >
          <span className={styles.bigCrumb}>Home</span>
          <Home className={styles.smallCrumb} size={18} />
        </NavLink>
      }
      {author && (
        <NavLink to={`/${author}`}>
          {"> "}
          {author}
        </NavLink>
      )}
      {bookId && (
        <NavLink to={`/${author}/${bookId}`} className={styles.bookTitleCrumb}>
          {"> "}
          {bookTitle}
        </NavLink>
      )}
    </nav>
  );
};
