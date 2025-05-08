import { FC, useState, useEffect } from "react";
import { useActionData, useParams} from "react-router-dom";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import { AuthorBooks } from "../AuthorBooks";
import { BookRecordType } from "../../types";
import { Loader } from "../../components";
import styles from "./details.module.css";
import { bookDataMapper } from "../mappers";

export const Books: FC = () => {
  const { author } = useParams();
  // const [fetchedBooks, setFetchedBooks] = useState<BookRecordType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(, [author]);
  const fetchedBooks = useActionData()
  const node = fetchedBooks as any
  return (
    <>
      {!isLoading ? (
        <>
          <div className={styles.wrapper}>
            <AuthorBooks fetchedBooks={fetchedBooks as unknown as BookRecordType[] } />
            <div className={styles.line}></div>
            
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
