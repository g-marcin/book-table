import { FC, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { Table } from "react-bootstrap";
import { AuthorRecord } from "./AuthorRecord";
import { Loader } from "../../components";
import { CustomPagination } from "../../components/CustomPagination";
import { AuthorRecordType } from "../../types";
import { authorDataMapper } from "../mappers";

const styles = {
  wrapper: "",
};

export const AuthorsTable: FC = () => {
  const [page, setPage] = useState<number>(1);
  const setPageHandler = (page: number) => {
    setPage(page);
  };
  const [fetchedAuthors, setFetchedAuthors] = useState<AuthorRecordType[]>([]);
  useEffect(() => {
    httpClient.get(`/volumes?q=startIndex=${page - 1}0`).then((response: AxiosResponse) => {
      setFetchedAuthors(authorDataMapper(response.data.items));
    });
  }, [page]);

  return (
    <div className={styles.wrapper}>
      {fetchedAuthors.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr role="table-header">
                <th>Author</th>
                <th>Category</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {fetchedAuthors.map(({ id, author, language, category }: AuthorRecordType) => {
                return <AuthorRecord author={author} language={language} category={category} key={id} />;
              })}
            </tbody>
          </Table>
          <CustomPagination page={page} setPageHandler={setPageHandler} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
