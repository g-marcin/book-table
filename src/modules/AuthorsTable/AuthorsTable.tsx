import { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { Table } from "react-bootstrap";
import { AuthorRecord } from "./AuthorRecord";
import { Loader } from "../../components";
import { CustomPagination } from "../../components/CustomPagination";
import { AuthorRecordType } from "../../types";
import { authorDataMapper } from "../mappers";
import styles from "./authorsTable.module.css";


export const AuthorsTable: FC = () => {
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setPageHandler = (page: number) => {
    setPage(page);
  };
  const [fetchedAuthors, setFetchedAuthors] = useState<AuthorRecordType[]>([]);
  useEffect(() => {
    setIsLoading(true);
    httpClient.get(`/volumes?q=startIndex=${page - 1}0`).then((response: AxiosResponse) => {
      setFetchedAuthors(authorDataMapper(response.data.items));
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [page]);

  return (
    <div className={styles.wrapper}>
        <>
      {isLoading ? <Loader /> : (
          <Table>
            <thead>
              <tr role="table-header">
                <th>Author</th>
                {/* <th>Category</th> */}
                {/* <th>Language</th> */}
              </tr>
            </thead>
            <tbody>
              {fetchedAuthors.map(({ id, author, language, category }: AuthorRecordType) => {
                return <AuthorRecord author={author} language={language} category={category} key={id} />;
              })}
            </tbody>
          </Table>
        )}
          <CustomPagination page={page} setPageHandler={setPageHandler} />
        </>
    </div>
  );
};
