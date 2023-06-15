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
  isSelected: boolean;
  presentAuthor: string;
  presentAuthorSetter: (presentAuthor: string) => void;
  presentRecord: string;
  presentRecordSetter: (id: string) => void; //TODO : remove to types change name to books
};

export const BooksTable: FC = () => {
  const { fetchedBooksData, presentAuthor, presentAuthorSetter, presentRecord, presentRecordSetter } =
    useContext(BookContext);

  return (
    <>
      <div className={styles["wrapper"]}>
        {fetchedBooksData ? (
          <Table variant="dark" striped className={styles["booksTable"]}>
            <thead className={styles.tableHeader}>
              <tr>
                <th style={{ minWidth: "150px" }}>Author</th>
                <th style={{ minWidth: "150px" }}>Title</th>
                <th>Category</th>
                <th>Publisher</th>
                <th>Book ID</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {fetchedBooksData.map(
                ({ id, author, title, category, publisher, isSelected }: BookRecordProps, index: number) => {
                  return (
                    <BookRecord
                      id={id}
                      author={author}
                      title={title}
                      category={category}
                      publisher={publisher}
                      presentAuthor={presentAuthor}
                      presentAuthorSetter={presentAuthorSetter}
                      presentRecord={presentRecord}
                      presentRecordSetter={presentRecordSetter}
                      isSelected={isSelected}
                      key={index}
                    />
                  );
                }
              )}
            </tbody>
          </Table>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
};
