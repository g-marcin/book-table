import { FC } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Home } from "react-feather";
import { useBookDetails, useWindowInnerWidth } from "../../../hooks";
import styles from "./subheader.module.css";

export const SubHeader: FC = () => {
  const { bookId, author } = useParams();

  const { title: bookTitle = "" } = useBookDetails();
  const innerWidth = useWindowInnerWidth();
  const navigate = useNavigate();

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  
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
          {innerWidth<660 ? truncate(author, 20) : author}
        </NavLink>
      )}
      {bookId && (
        <NavLink to={`/${author}/${bookId}`} className={`${styles.bookTitleCrumb} text-decoration-none`}>
          {"> "}
          {innerWidth<660 ? truncate(bookTitle, 20) : bookTitle}
        </NavLink>
      )}
    </nav>
  );
};
