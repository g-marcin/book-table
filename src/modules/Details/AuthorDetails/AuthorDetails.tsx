import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { DetailsPlaceholder } from "../../../components";
import styles from "./authorDetails.module.css";

type AuthorDetailsProps = {
  fetchedBooks: {
    title: string;
    image: string;
  }[];
};

export const AuthorDetails: FC<AuthorDetailsProps> = ({ fetchedBooks }: any) => {
  const navigate = useNavigate();
  const { author, bookId } = useParams();

  return (
    <div className={styles["authorDetails"]}>
      <Table>
        {author && (
          <thead className={styles.tableHeader}>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Category</th>
              <th>Publisher</th>
              <th>Book Id</th>
            </tr>
          </thead>
        )}
        <tbody>
          {fetchedBooks.length !== 0 ? (
            fetchedBooks.map(({ id, author, title, category, publisher, image }: any, index: number) => {
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
            })
          ) : (
            <DetailsPlaceholder name={"different author"} />
          )}
        </tbody>
      </Table>
    </div>
  );
};
