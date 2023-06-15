import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../../contexts/BookContext";
import styles from "./bookRecord.module.css";

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
  presentRecordSetter: (id: string) => void;
};

export const BookRecord: FC<BookRecordProps> = ({
  id,
  author,
  title,
  category,
  publisher,
  presentAuthorSetter,

  presentRecordSetter,
}) => {
  const [isisSelected, setIsisSelected] = useState(false);
  const navigate = useNavigate();
  const { presentAuthor, presentRecord } = useContext(BookContext);
  useEffect(() => {
    setIsisSelected(presentRecord === id);
    if (presentRecord !== "") {
      navigate(`/${presentAuthor}`);
    }
  }, [presentRecord]);

  const bookRecordHandler = async () => {
    presentAuthorSetter(author);
    presentRecordSetter(id);
  };

  return (
    <tr
      key={id}
      className={`${styles.bookRecord} ${isisSelected ? styles["isSelected"] : ""}`}
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
