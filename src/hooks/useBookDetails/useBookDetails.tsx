import { AxiosResponse } from "axios";
import { httpClient } from "../../common";
import { BookContext } from "../../contexts/BookContext";
import { useContext, useEffect, useState } from "react";

export const useBookDetails = () => {
  const { presentDescription } = useContext(BookContext);
  const [bookDescription, setBookDescription] = useState("");
  useEffect(() => {
    httpClient.get(`/volumes/${presentDescription}`).then((response: AxiosResponse) => {
      setBookDescription(response.data.volumeInfo.description);
      console.log(response);
    });
    console.log("Details!");
  }, [presentDescription]);
  return { bookDescription: bookDescription };
};
