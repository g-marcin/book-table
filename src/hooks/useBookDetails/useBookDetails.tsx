import { useContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { BookContext } from "../../contexts";

export const useBookDetails = () => {
  const { presentDescription } = useContext(BookContext);
  const [bookDescription, setBookDescription] = useState<TrustedHTML>("");
  const [bookTitle, setBookTitle] = useState("");

  useEffect(() => {
    httpClient.get(`/volumes/${presentDescription}`).then((response: AxiosResponse) => {
      setBookDescription(response.data.volumeInfo.description);
      setBookTitle(response.data.volumeInfo.title);
    });
  }, [presentDescription]);

  return { bookDescription: bookDescription, bookTitle: bookTitle };
};
