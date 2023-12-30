import { FC } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Home } from "react-feather";
import { useBookDetails } from "../../../hooks";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
  const { bookId, author } = useParams();

  const { title: bookTitle = "" } = useBookDetails();
  const navigate = useNavigate();
  return (
    <nav className={`${styles.nav} text-decoration-none`}>
      {
        <NavLink
          to="/"
          onClick={() => {
            navigate("/");
          }}
          className={`${styles.homeCrumb} text-decoration-none`}
        >
          <span className={styles.bigCrumb}>Home</span>
          <Home className={styles.smallCrumb} size={18} />
        </NavLink>
      }
      {author && (
        <NavLink to={`/${author}`} className={`${styles.authorCrumb} text-decoration-none`}>
          {"> "}
          {author}
        </NavLink>
      )}
      {bookId && (
        <NavLink to={`/${author}/${bookId}`} className={`${styles.bookTitleCrumb} text-decoration-none`}>
          {"> "}
          {bookTitle}
        </NavLink>
      )}
    </nav>
  );
};
