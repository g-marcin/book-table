import { FC } from "react";
import { AuthorsTable } from "..";
import Details from "../Details/Details";
import BookDetails from "../BookDetails/BookDetails";

const BooksPage: FC = () => {
  
  return (
    <>
     <AuthorsTable />
     <Details />
     <BookDetails />     
    </>
  );
};

export default BooksPage;
