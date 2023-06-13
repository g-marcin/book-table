import { FC, useContext } from "react";
import styles from "./details.module.css";
import { BookContext } from "../../contexts/BookContext";
import { useGetAuthorBooks } from "../../hooks/useGetAuthorBooks";

export const Details: FC = () => {
  const { fetchedBooksData, presentAuthor = "" } = useContext(BookContext);
  const presentAuthorBooks = useGetAuthorBooks();

  return <div className={styles["details"]}>{presentAuthor || "details"}</div>;
};
