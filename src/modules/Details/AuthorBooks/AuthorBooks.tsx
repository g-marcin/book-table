import { FC } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { DetailsPlaceholder } from "../../../components";
import { BookRecord } from "./BookRecord";
import { BookRecordType } from "../../../types";
import styles from "./authorBooks.module.css";

type AuthorBooksProps = {
  fetchedBooks: BookRecordType[];
};

export const AuthorBooks: FC<AuthorBooksProps> = ({ fetchedBooks }) => {
  const { author } = useParams();

  return (
    <div className={styles["authorDetails"]}>
      <Table>
        {author && fetchedBooks.length !== 0 ? (
          <thead className={styles.tableHeader}>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Category</th>
              <th>Publisher</th>
              <th>Book Id</th>
            </tr>
          </thead>
        ) : (
          <DetailsPlaceholder name={"author"} />
        )}
        <tbody>
          {fetchedBooks.map(({ id, title, category, publisher, image }: BookRecordType) => {
            return <BookRecord key={id} id={id} title={title} category={category} publisher={publisher} image={image} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};
