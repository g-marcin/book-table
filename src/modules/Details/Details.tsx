import { FC } from "react";
import { useParams, Outlet } from "react-router-dom";
import { AuthorDetails } from "./AuthorDetails";
import { BookDetails } from "./BookDetails/BookDetails";

import styles from "./details.module.css";
import { DetailsPlaceholder } from "../../components";

export const Details: FC = () => {
  const { bookId, author } = useParams();

  return (
    <div className={styles.mainWrapper}>
      {author ? <AuthorDetails /> : <DetailsPlaceholder name={"record"} />}
      <Outlet />
    </div>
  );
};
