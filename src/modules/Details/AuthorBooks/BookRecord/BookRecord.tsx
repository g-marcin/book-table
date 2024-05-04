import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./bookRecord.module.css";
import { useWindowInnerWidth } from "@hooks/index";

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
  const innerWidth = useWindowInnerWidth();

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
      role="book-record"
    >
      <td>
        <img src={image} alt={`${title}-image`} />
      </td>
      <td>{title}</td>
      <td>{category}</td>
      {innerWidth > 768 && (
        <>      
        <td>{publisher}</td>
        <td>{id}</td>
        </>
      )}
    </tr>
  );
};




