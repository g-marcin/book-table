import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./authorRecord.module.css";

type AuthorRecordProps = {
  author: string;
};

export const AuthorRecord: FC<AuthorRecordProps> = ({ author }) => {
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
      role="author-record"
    >
      <td className={styles.cell}>{author}</td>
    </tr>
  );
};
