import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./authorRecord.module.css";

type AuthorRecordProps = {
  id: string;
  author: string;
  language: string;
  category: string;
};

export const AuthorRecord: FC<AuthorRecordProps> = ({ id, author, language, category }) => {
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
      <td>{category}</td>
      <td>{language}</td>
    </tr>
  );
};
