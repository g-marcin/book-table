import { FC, createContext, useEffect, PropsWithChildren, useState } from "react";
import { httpClient } from "../../common/httpClient";
import { fetchedBooksData } from "../../types";

type BookContextType = {
  fetchedBooksData: fetchedBooksData;
  presentAuthor: string;
  presentAuthorSetter: (presentAuthor: string) => void;
  presentRecord: string;
  presentRecordSetter: (id: string) => void;
  presentDescription: string;
  presentDescriptionSetter: (id: string) => void;
};

type MappedBookObject = {
  [k: string]: string | boolean;
};

export const BookContext = createContext<BookContextType>({
  fetchedBooksData: { key: "value" },
  presentAuthor: "",
  presentAuthorSetter: () => {
    return;
  },
  presentRecord: "",
  presentRecordSetter: () => {
    return;
  },
  presentDescription: "",
  presentDescriptionSetter: () => {
    return;
  },
});
export const BookContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fetchedBooks, setFetchedBooks] = useState<MappedBookObject[]>([{ key: "" }]);
  const [presentRecord, setPresentRecord] = useState<string>("");
  const [presentAuthor, setPresentAuthor] = useState<string>("");
  const [presentDescription, setPresentDescription] = useState<string>("");

  useEffect(() => {
    const promise1 = httpClient.get("/volumes?q=inauthor:J.R.R&maxResults=12&startIndex=20");
    const promise2 = httpClient.get("/volumes?q=inauthor:Hemingway&maxResults=12&startIndex=0");
    const promise3 = httpClient.get("/volumes?q=inauthor:Steinbeck&maxResults=12&startIndex=0");

    Promise.all([promise1, promise2, promise3]).then((values) => {
      const bookCollection: MappedBookObject[] = [];
      values.map((response) => {
        response.data.items.map((item: fetchedBooksData) => {
          if (!item.volumeInfo.authors) {
            return;
          }
          if (!item.volumeInfo.categories) {
            return;
          }
          if (!item.volumeInfo.publisher) {
            return;
          }
          bookCollection.push({
            id: item.id,
            author: item.volumeInfo.authors[0],
            title: item.volumeInfo.title,
            category: item.volumeInfo.categories[0],
            publisher: item.volumeInfo.publisher,
            image: item.volumeInfo.imageLinks.thumbnail,
          });
        });
      });
      setFetchedBooks(bookCollection);
    });
  }, []);
  useEffect(() => {
    const fetchedBooksCopy = [...fetchedBooks];
    const newFetchedBooks = fetchedBooksCopy.map((book) => {
      if (book.id === presentRecord) {
        book.isSelected = true;
      }
      return book;
    });
    setFetchedBooks(newFetchedBooks);
  }, [presentRecord]);

  function presentAuthorSetter(presentAuthor: string) {
    setPresentAuthor(presentAuthor);
  }
  function presentRecordSetter(id: string) {
    setPresentRecord(id);
  }
  function presentDescriptionSetter(destcription: string) {
    setPresentDescription(destcription);
  }

  return (
    <BookContext.Provider
      value={{
        fetchedBooksData: fetchedBooks,
        presentAuthor: presentAuthor,
        presentAuthorSetter: presentAuthorSetter,
        presentRecord: presentRecord,
        presentRecordSetter: presentRecordSetter,
        presentDescription: presentDescription,
        presentDescriptionSetter: presentDescriptionSetter,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
