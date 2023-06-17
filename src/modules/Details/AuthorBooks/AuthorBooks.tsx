import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { DetailsPlaceholder } from "../../../components";
import styles from "./authorBooks.module.css";

type AuthorBooksProps = {
  fetchedBooks: {
    title: string;
    image: string;
  }[];
};

export const AuthorBooks: FC<AuthorBooksProps> = ({ fetchedBooks }: any) => {
  const navigate = useNavigate();
  const { author, bookId } = useParams();

  return (
    <div className={styles["authorDetails"]}>
      <Table>
        {author && fetchedBooks.length !== 0 ? (
          <thead className={styles.tableHeader}>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Category</th>
              <th>Publisher</th>
              <th>Book Id</th>
            </tr>
          </thead>
        ) : (
          <DetailsPlaceholder name={"author"} />
        )}
        <tbody>
          {fetchedBooks.map(({ id, author, title, category, publisher, image }: any, index: number) => {
            return (
              <tr
                onClick={() => {
                  navigate(`/${author}/${id}`);
                }}
                className={`${styles.bookRecord} ${id === bookId ? "table-primary" : ""}`}
                key={index}
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
          })}
        </tbody>
      </Table>
    </div>
  );
};
