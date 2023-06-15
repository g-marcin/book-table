import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../../contexts";
import { MappedBookObject } from "../../../types";
import { Table } from "react-bootstrap";
import styles from "./authorDetails.module.css";

export const AuthorDetails: FC = () => {
  const { fetchedBooksData, presentAuthor, presentDescriptionSetter } = useContext(BookContext);
  const navigate = useNavigate();
  const showBookDetails = (id: string) => {
    presentDescriptionSetter(id);
  };

  return (
    <div className={styles["authorDetails"]}>
      <Table striped className={styles["booksTable"]}>
        {presentAuthor && (
          <thead className={styles.tableHeader}>
            <tr>
              <th>Title</th>
              <th>Cover</th>
            </tr>
          </thead>
        )}
        <tbody className="tableBody">
          {fetchedBooksData
            .filter((book: MappedBookObject) => book.author === presentAuthor)
            .map(({ id, title, image }: any, index: number) => {
              return (
                <tr
                  onClick={() => {
                    showBookDetails(id);
                    navigate(`/${presentAuthor}/${title}`);
                  }}
                  className={styles.bookRecord}
                >
                  <th>
                    {" "}
                    <p>{title}</p>
                  </th>
                  <th>
                    {" "}
                    <img src={image} alt="" />
                  </th>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
