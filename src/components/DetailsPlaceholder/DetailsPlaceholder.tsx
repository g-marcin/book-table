import { FC } from "react";
import styles from "./detailsPlaceholder.module.css";

type DetailsPlaceholderProps = {
  name: string;
};

export const DetailsPlaceholder: FC<DetailsPlaceholderProps> = ({ name }) => {
  return (
    <div className={styles.placeholder}>
      <p>Please choose different {name ? name : "data"}...</p>
    </div>
  );
};
