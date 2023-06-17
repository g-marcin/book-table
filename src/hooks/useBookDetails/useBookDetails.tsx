import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";

export const useBookDetails = () => {
  const [bookDetails, setBookDetails] = useState({ title: "", description: "" });
  const { bookId = "" } = useParams();
  useEffect(() => {
    if (!bookId) {
      return;
    }
    httpClient.get(`/volumes/${bookId}`).then((response: AxiosResponse) => {
      setBookDetails(response.data.volumeInfo);
    });
  }, [bookId]);

  return bookDetails;
};
