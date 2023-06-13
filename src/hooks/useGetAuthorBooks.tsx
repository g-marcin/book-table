import { useContext, useEffect, useState } from "react";
import { httpClient } from "../common";
import { BookContext } from "../contexts/BookContext";

export const useGetAuthorBooks = () => {
  const [authorBooks, setAuthorBooks] = useState<any>([]);
  const { presentAuthor } = useContext(BookContext);
  useEffect(() => {
    httpClient.get(`/volumes?q=inauthor:${presentAuthor}&maxResults=40&startIndex=20`).then((response) => {
      const bookCollection: any = [];

      response.data.items.map((item: any) => {
        bookCollection.push({
          id: item.id,
          authors: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "unknown",
          title: item.volumeInfo.title,
          category: item.volumeInfo.categories ? item.volumeInfo.categories[0] : "unknown",
          publisher: item.volumeInfo.publisher ? item.volumeInfo.publisher : "unknown",
        });
      });
      setAuthorBooks(bookCollection);
    });
  }, [presentAuthor]);
  return authorBooks;
};
