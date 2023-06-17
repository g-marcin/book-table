import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";

import { useParams } from "react-router-dom";

export const useBookDetails = () => {
  const [bookDescription, setBookDescription] = useState<TrustedHTML>("");
  const [bookTitle, setBookTitle] = useState("");
  const { bookId = "" } = useParams();
  useEffect(() => {
    if (!bookId) {
      return;
    }
    httpClient.get(`/volumes/${bookId}`).then((response: AxiosResponse) => {
      setBookDescription(response.data.volumeInfo.description);
      setBookTitle(response.data.volumeInfo.title);
      //volume info
    });
  }, [bookId]);

  return { bookDescription: bookDescription, bookTitle: bookTitle };
};
