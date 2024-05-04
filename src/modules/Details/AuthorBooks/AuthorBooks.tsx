import { FC } from "react";
import { Table } from "react-bootstrap";
import { BookRecord } from "./BookRecord";
import { BookRecordType } from "../../../types";
import styles from "./authorBooks.module.css";
import { useWindowInnerWidth } from "@hooks/index";

type AuthorBooksProps = {
  fetchedBooks: BookRecordType[];
};

export const AuthorBooks: FC<AuthorBooksProps> = ({ fetchedBooks }) => {
  const innerWidth = useWindowInnerWidth();
  return (
    <div className={styles.authorDetails}>
      <Table role="author-books">
        <thead className={styles.tableHeader}>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Category</th>
            {innerWidth > 768 && (
              <>
                <th>Publisher</th>
                <th>ID</th>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {fetchedBooks.map(({ id, title, category, publisher, image }: BookRecordType) => {
            return <BookRecord key={id} id={id} title={title} category={category} publisher={publisher} image={image} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};
