import { FC } from "react";
import styles from "./bookRecord.module.css";

type BookRecordProps = {
  id: string;
  authors: string;
  title: string;
  category: string;
  publisher: string;
  presentAuthorSetter: (presentAuthor: string) => void;
};

export const BookRecord: FC<BookRecordProps> = ({ id, authors, title, category, publisher, presentAuthorSetter }) => {
  const bookRecordHandler = () => {
    presentAuthorSetter(authors);
    console.log(authors);
  };

  return (
    <tr
      key={id}
      className={styles.bookRecord}
      onClick={() => {
        bookRecordHandler();
      }}
    >
      <td className={styles.item}>{id}</td>
      <td>{authors}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{publisher}</td>
    </tr>
  );
};
