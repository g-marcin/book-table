import { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { Table } from "react-bootstrap";
import { AuthorRecord } from "./AuthorRecord";
import { fetchedBooksData } from "../../types";
import { CustomPagination } from "../../components/CustomPagination";
import styles from "./authorsTable.module.css";

type AuthorData = {
  id: string;
  author: string;
  language: string;
  title: string;
  category: string;
  publisher: string;
  image: string;
  isSelected: boolean;
};

export const AuthorsTable: FC = () => {
  const [active, setActive] = useState(1);
  const setActiveHandler = (page: number) => {
    setActive(page);
  };
  const [fetchedAuthors, setFetchedAuthors] = useState<AuthorData[]>([]);

  useEffect(() => {
    httpClient.get(`/volumes?q=startIndex=${active}0`).then((response: AxiosResponse) => {
      const authorsCollection = response.data.items.map((item: fetchedBooksData) => {
        if (!item.volumeInfo.authors) {
          return;
        }
        if (!item.volumeInfo.publisher) {
          return;
        }
        if (!item.volumeInfo.categories) {
          return;
        }
        if (!item.volumeInfo.imageLinks) {
          return;
        }
        return {
          id: item.id,
          author: item.volumeInfo.authors[0],
          language: item.volumeInfo.language,
          title: item.volumeInfo.title,
          category: item.volumeInfo.categories[0],
          publisher: item.volumeInfo.publisher,
          image: item.volumeInfo.imageLinks.thumbnail,
        };
      });
      setFetchedAuthors(authorsCollection);
    });
  }, [active]);

  return (
    <div className={styles["Table__wrapper"]}>
      {fetchedAuthors ? (
        <Table striped className={`${styles["booksTable"]} `}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Author</th>
              <th>Category</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {fetchedAuthors.map(({ id, author, language, category }: AuthorData, index: number) => {
              return <AuthorRecord id={id} author={author} language={language} category={category} key={index} />;
            })}
          </tbody>
        </Table>
      ) : (
        <>loading...</>
      )}
      <CustomPagination active={active} setActiveHandler={setActiveHandler} />
    </div>
  );
};
