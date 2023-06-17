import { FC, useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { AuthorDetails } from "./AuthorDetails";
import { DetailsPlaceholder } from "../../components";
import styles from "./details.module.css";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";

const Details: FC = () => {
  const { author } = useParams();
  const [fetchedBooks, setFetchedBooks] = useState([{ id: "", title: "", image: "", author: "" }]);

  useEffect(() => {
    const booksCollection: any[] = [];
    httpClient.get(`/volumes?q=inauthor:${author}&maxResults=12&startIndex=10`).then((response: AxiosResponse) => {
      response.data.items.forEach((item: any) => {
        if (!item.volumeInfo.authors) {
          return;
        }
        if (!item.volumeInfo.publisher) {
          return;
        }
        if (!item.volumeInfo.categories) {
          return;
        }
        if (!item.volumeInfo.imageLinks) {
          return;
        }
        if (!item.volumeInfo.imageLinks) {
          return;
        }
        booksCollection.push({
          id: item.id,
          title: item.volumeInfo.title,
          author: author,
          category: item.volumeInfo.categories[0],
          publisher: item.volumeInfo.publisher,
          image: item.volumeInfo.imageLinks.thumbnail,
        });
      });

      setFetchedBooks(booksCollection);
    });
    console.log(booksCollection);
  }, [author]);

  return (
    <div className={styles.mainWrapper}>
      {author ? <AuthorDetails fetchedBooks={fetchedBooks} /> : <DetailsPlaceholder name={"record"} />}
      <Outlet />
    </div>
  );
};

export default Details;
