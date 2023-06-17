import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { useParams } from "react-router-dom";

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
