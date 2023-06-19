import { FC, useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import { AuthorBooks } from "./AuthorBooks";
import { BookRecordType } from "../../types";
import { Loader } from "../../components";
import styles from "./details.module.css";
import { bookDataMapper } from "../mappers";

const Details: FC = () => {
  const { author } = useParams();
  const [fetchedBooks, setFetchedBooks] = useState<BookRecordType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    httpClient.get(`/volumes?q=inauthor:${author}&startIndex=0`).then((response: AxiosResponse) => {
      setFetchedBooks(bookDataMapper(response.data.items));
      setIsLoading(false);
    });
  }, [author]);

  return (
    <>
      {!isLoading ? (
        <>
          <div className={styles.wrapper}>
            <AuthorBooks fetchedBooks={fetchedBooks} />
            <div className={styles.line}></div>
            <Outlet />
          </div>
        </>
      ) : (
        <div className={styles.center}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default Details;
