import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./bookRecord.module.css";

type BookRecordProps = {
  id: string;
  author: string;
  language: string;
};

export const BookRecord: FC<BookRecordProps> = ({ id, author, language }) => {
  const { author: currentAuthor } = useParams();
  const navigate = useNavigate();

  return (
    <tr
      key={id}
      className={`${styles.bookRecord} ${currentAuthor === author ? "table-primary" : ""}`}
      onClick={() => {
        navigate(`/${author}`);
      }}
    >
      <td>{author}</td>
      <td>{language}</td>
    </tr>
  );
};
