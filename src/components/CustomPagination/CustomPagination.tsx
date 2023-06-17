import { FC } from "react";
import styles from "./customPagination.module.css";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.css";

type customPaginationProps = {
  active: number;
  setActiveHandler: (page: number) => void;
};

export const CustomPagination: FC<customPaginationProps> = ({ active, setActiveHandler }) => {
  const items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setActiveHandler(number);
        }}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className={styles.pagination}>
      <Pagination size="sm">{items}</Pagination>
      <br />
    </div>
  );
};
