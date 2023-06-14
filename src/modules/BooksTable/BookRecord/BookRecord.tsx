import { FC, useEffect, useState, useContext } from "react";
import styles from "./bookRecord.module.css";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../../contexts/BookContext";

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

export const BookRecord: FC<BookRecordProps> = ({
  id,
  author,
  title,
  category,
  publisher,

  presentAuthorSetter,
  presentBook,
  presentBookSetter,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const { presentAuthor } = useContext(BookContext);
  useEffect(() => {
    setIsSelected(presentBook === id);
  }, [presentBook]);

  const bookRecordHandler = async () => {
    presentAuthorSetter(author);
    navigate(`/${presentAuthor}`);
    presentBookSetter(id);
  };

  return (
    <tr
      key={id}
      className={`${styles.bookRecord} ${isSelected ? styles["selected"] : ""}`}
      onClick={() => {
        bookRecordHandler();
      }}
    >
      <td className={styles.item}>{id}</td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{publisher}</td>
    </tr>
  );
};
