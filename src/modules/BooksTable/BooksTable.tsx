import { FC, useContext } from "react";
import { Table } from "react-bootstrap";
import { BookRecord } from "./BookRecord";
import styles from "./bookstable.module.css";
import { BookContext } from "../../contexts/BookContext";

type BookRecordProps = {
  id: string;
  authors: string;
  title: string;
  category: string;
  publisher: string;
  presentAuthorSetter: (presentAuthor: string) => void;
};

export const BooksTable: FC = () => {
  const { fetchedBooksData, presentAuthorSetter } = useContext(BookContext);

  return (
    <>
      <Table variant="dark" striped className={styles["booksTable"]}>
        <thead>
          <tr>
            <th> Book ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>Category</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {fetchedBooksData.map(({ id, authors, title, category, publisher }: BookRecordProps) => {
            return (
              <BookRecord
                id={id}
                authors={authors}
                title={title}
                category={category}
                publisher={publisher}
                presentAuthorSetter={presentAuthorSetter}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
