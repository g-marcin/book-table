import { FC } from "react";
import styles from "./customPagination.module.css";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.css";

type customPaginationProps = {
  page: number;
  setPageHandler: (page: number) => void;
};

export const CustomPagination: FC<customPaginationProps> = ({ page, setPageHandler }) => {
  const items = [];
  for (let number = 1; number <= 10; number++) {
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

  return (
    <div className={styles.pagination}>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};
