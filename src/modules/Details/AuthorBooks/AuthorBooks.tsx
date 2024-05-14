import { FC, useState } from "react";
import { Table } from "react-bootstrap";
import { BookRecord } from "./BookRecord";
import { BookRecordType } from "../../../types";
import styles from "./authorBooks.module.css";
import { useWindowInnerWidth } from "@hooks/index";

type AuthorBooksProps = {
  fetchedBooks: BookRecordType[];
};

type Column = 'category' | 'title' | 'publisher' | 'id'

export const AuthorBooks: FC<AuthorBooksProps> = ({ fetchedBooks }) => {
  const innerWidth = useWindowInnerWidth();
  const [sortingColumn, setSortingColumn] = useState<Column>('title');
  const [sortingOrder, setSortingOrder] = useState<"asc" | "desc"| undefined>(undefined);


  const bookSortingHandler = (a: BookRecordType, b: BookRecordType) => {
    if (!sortingOrder) return 0;
    return sortingOrder === "asc" ? a[sortingColumn].localeCompare(b[sortingColumn]) :  b[sortingColumn].localeCompare(a[sortingColumn]);   
  };
  const sortOptionClickHandler = (column: Column) => {
    setSortingColumn(column);
    setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
    return undefined
  }
  return (
    <div className={styles.authorDetails}>
      <button onClick={()=>setSortingOrder('asc')}>asc</button>
      <button onClick={()=>setSortingOrder('desc')}>desc</button>
      {/* <select placeholder="Please choose book sorting option...">
        <option></option>
        <optgroup label="Title">
        <option onClick={sortOptionClickHandler('title')}>A-Z</option>
        <option onClick={sortOptionClickHandler('title')}>Z-A</option>
        </optgroup>
        <optgroup label="Category">
        <option onClick={sortOptionClickHandler('category')}>A-Z</option>
        <option onClick={sortOptionClickHandler('category')}>Z-A</option>
        </optgroup>
      </select> */}
      <Table role="author-books">
        <thead className={styles.tableHeader}>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Category</th>
            {innerWidth > 768 && (
              <>
                <th>Publisher</th>
                <th>ID</th>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {fetchedBooks.sort(bookSortingHandler).map(({ id, title, category, publisher, image }: BookRecordType) => {
            return <BookRecord key={id} id={id} title={title} category={category} publisher={publisher} image={image} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};
