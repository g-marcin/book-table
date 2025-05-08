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
import { useParams } from "react-router-dom";

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


  const params = useParams()
  return (
    <div className=" bg-gray-200 w-96 flex-col">
      {params.authorId && <div>{params.authorId}</div>}
     
       
          {/* fetchedAuthors */}
          
          {fetchedAuthors.map(({ id, author }: AuthorRecordType) =>{
              return <AuthorRecord author={author} className="" key={id} />
            })}

<CustomPagination page={page} setPageHandler={setPageHandler} />
    </div>
  );
};
