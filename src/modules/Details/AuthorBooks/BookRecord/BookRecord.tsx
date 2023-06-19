import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./bookRecord.module.css";

type BookRecordProps = {
  id: string;
  image: string;
  title: string;
  category: string;
  publisher: string;
};

export const BookRecord: FC<BookRecordProps> = ({ id, image, title, category, publisher }) => {
  const navigate = useNavigate();
  const { author, bookId } = useParams();
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <tr
      onClick={() => {
        navigate(`/${author}/${id}`);
      }}
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
      className={`${styles.bookRecord} ${id === bookId ? "table-primary" : ""} ${mouseOver ? "table-secondary" : ""}`}
    >
      <td>
        <img src={image} alt="" />
      </td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{publisher}</td>
      <td className={styles.item}>{id}</td>
    </tr>
  );
};
