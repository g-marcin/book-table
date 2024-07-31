import {useEffect} from 'react'
import { httpClient } from '../common';
import { AxiosResponse } from 'axios';
import { authorDataMapper } from '../modules/mappers';
const fetchedAuthors:any[] = []
export const useAuthors = ({setIsLoading,page}:any) => {
    useEffect(() => {
        const result: AuthorRecordType[] = [];
        setIsLoading(true);
        httpClient
          .get(`/volumes?q=startIndex=${page - 1}0`)
          .then((response: AxiosResponse) => {
            result.push(...authorDataMapper(response.data.items));
          });
    
        fetchedAuthors.concat(result)
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, [page]);

      return fetchedAuthors
}
