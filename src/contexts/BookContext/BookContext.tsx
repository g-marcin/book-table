import { FC, createContext, useEffect, PropsWithChildren, useState } from "react";
import { httpClient } from "../../common/httpClient";

type BookContextType = {
  fetchedBooksData?: any;
  presentAuthor?: string;
  presentAuthorSetter: (presentAuthor: string) => void;
};

export const BookContext = createContext<BookContextType>({ presentAuthorSetter: () => null });
export const BookContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedBooks, setFetchedBooks] = useState<any>();
  const [presentAuthor, setPresentAuthor] = useState<string>("Ernest Hemingway");

  useEffect(() => {
    const promise1 = httpClient.get("/volumes?q=inauthor:Tolkien&maxResults=3&startIndex=20");
    const promise2 = httpClient.get("/volumes?q=inauthor:Hemingway&maxResults=3&startIndex=0");
    const promise3 = httpClient.get("/volumes?q=inauthor:Steinbeck&maxResults=3&startIndex=0");

    Promise.all([promise1, promise2, promise3]).then((values) => {
      const bookCollection: any = [];
      values.map((response) => {
        response.data.items.map((item: any) => {
          bookCollection.push({
            id: item.id,
            authors: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "unknown",
            title: item.volumeInfo.title,
            category: item.volumeInfo.categories ? item.volumeInfo.categories[0] : "unknown",
            publisher: item.volumeInfo.publisher ? item.volumeInfo.publisher : "unknown",
          });
        });
      });
      setFetchedBooks(bookCollection);
    });
  }, []);

  function presentAuthorSetter(presentAuthor: string) {
    setPresentAuthor(presentAuthor);
  }

  return (
    <BookContext.Provider
      value={{
        fetchedBooksData: fetchedBooks,
        presentAuthor: presentAuthor,
        presentAuthorSetter: presentAuthorSetter,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
