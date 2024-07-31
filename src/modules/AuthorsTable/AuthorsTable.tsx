import { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { Table } from "react-bootstrap";
import { AuthorRecord } from "../AuthorRecord";
import { Loader } from "../../components";
import { CustomPagination } from "../../components/CustomPagination";
import { AuthorRecordType } from "../../types";
import { authorDataMapper } from "../mappers";
import styles from "./authorsTable.module.css";

export const AuthorsTable: FC = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const setPageHandler = (page: number) => {
    setPage(page);
  };
  const [fetchedAuthors, setFetchedAuthors] = useState<AuthorRecordType[]>([]);
  useEffect(() => {
    const result: AuthorRecordType[] = [];
    setIsLoading(true);
    httpClient
      .get(`/volumes?q=startIndex=${page - 1}0`)
      .then((response: AxiosResponse) => {
        result.push(...authorDataMapper(response.data.items));
      });

    setFetchedAuthors(result);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <Table className={styles.authorsTable}>
        <thead>
          <tr role="table-header">
            <th>
              Author
            </th>
          </tr>
        </thead>
        <tbody style={{ height: "500px" }}>
          {/* fetchedAuthors */}
          {isLoading ? (
            <Loader />
          ) : (
            fetchedAuthors.map(({ id, author }: AuthorRecordType) => {
              return <AuthorRecord author={author} key={id} />;
            })
          )}       
        </tbody>
            <CustomPagination page={page} setPageHandler={setPageHandler} />
      </Table>
    </div>
  );
};
