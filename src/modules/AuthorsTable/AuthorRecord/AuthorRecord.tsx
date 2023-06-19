import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./authorRecord.module.css";

type AuthorRecordProps = {
  author: string;
  language: string;
  category: string;
};

export const AuthorRecord: FC<AuthorRecordProps> = ({ author, language, category }) => {
  const { author: routeAuthor } = useParams();
  const [mouseOver, setMouseOver] = useState(false);
  const navigate = useNavigate();

  return (
    <tr
      className={`${styles.bookRecord} ${routeAuthor === author ? "table-primary" : ""} ${
        mouseOver ? "table-secondary" : ""
      }`}
      onClick={() => {
        navigate(`/${author}`);
      }}
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
    >
      <td>{author}</td>
      <td>{category}</td>
      <td>{language}</td>
    </tr>
  );
};
