import { FC } from "react";
import styles from "./customPagination.module.css";
import Pagination from "react-bootstrap/Pagination";
import { ArrowButton } from "./ArrowButton";
import "bootstrap/dist/css/bootstrap.css";

type customPaginationProps = {
  page: number;
  maxPage?: number;
  setPageHandler: (page: number) => void;
};

export const CustomPagination: FC<customPaginationProps> = ({ page, setPageHandler, maxPage=100 }) => {
  const items = [];
  for (let number = 2; number <= 10; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPageHandler(number);
        }}
        key={number}
        active={number === page}
        
      >
        {number}
      </Pagination.Item>
    );
  }

  function getFirstElement (){ 
  return <Pagination.Prev
        onClick={() => {
          setPageHandler(1);
        }}
        key={1}
        active={page === 1}
      >
        1
      </Pagination.Prev>
      }
  function getLastElement (){ 
  return <Pagination.Next
        onClick={() => {
          setPageHandler(maxPage);
        }}
        key={maxPage}
        active={page===maxPage}
      >
        {maxPage}
  </Pagination.Next>
  }
  items.push(getLastElement())
  items.unshift(getFirstElement())

  return (
    <div className={styles.pagination}>
      <ArrowButton side="left" onClickHandler={pageDown} />
      
      <Pagination size="sm">{items}</Pagination>
      
      <ArrowButton side="right" onClickHandler={pageUp} />
    </div>
  );

  function pageUp() {
    if(page === maxPage) {
      return;
    }
    setPageHandler(page+1);
  }

  function pageDown() {
    if(page === 1) {
      return;
    }
    setPageHandler(page-1);
  }
};
