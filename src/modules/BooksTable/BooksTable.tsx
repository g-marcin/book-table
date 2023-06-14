import { FC, useContext } from "react";
import { Table } from "react-bootstrap";
import { BookRecord } from "./BookRecord";
import styles from "./bookstable.module.css";
import { BookContext } from "../../contexts/BookContext";

type BookRecordProps = {
  id: string;
  author: string;
  title: string;
  category: string;
  publisher: string;
  selected: boolean;
  presentAuthor: string;
  presentAuthorSetter: (presentAuthor: string) => void;
  presentBook: string;
  presentBookSetter: (id: string) => void;
};

export const BooksTable: FC = () => {
  const { fetchedBooksData, presentAuthor, presentAuthorSetter, presentBook, presentBookSetter } = useContext(BookContext);

  return (
    <>
      <div className={styles["wrapper"]}>
        <Table variant="dark" striped className={styles["booksTable"]}>
          <thead className={styles.tableHeader}>
            <tr>
              <th> Book ID</th>
              <th>Author</th>
              <th>Title</th>
              <th>Category</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {fetchedBooksData.map(({ id, author, title, category, publisher, selected }: BookRecordProps, index: number) => {
              return (
                <BookRecord
                  id={id}
                  author={author}
                  title={title}
                  category={category}
                  publisher={publisher}
                  presentAuthor={presentAuthor}
                  presentAuthorSetter={presentAuthorSetter}
                  presentBook={presentBook}
                  presentBookSetter={presentBookSetter}
                  selected={selected}
                  key={index}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
