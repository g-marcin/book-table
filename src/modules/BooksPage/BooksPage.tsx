import { FC } from "react";
import { AuthorsTable } from "..";
import BookDetails from "../BookDetails/BookDetails";

const BooksPage: FC = () => {
  
  return (
    <>
     <AuthorsTable />
    
     <BookDetails />     
    </>
  );
};

export default BooksPage;
