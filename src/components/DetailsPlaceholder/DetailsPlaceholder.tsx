import { FC } from "react";
import styles from "./detailsPlaceholder.module.css";

type DetailsPlaceholderProps = {
  name: string;
};

export const DetailsPlaceholder: FC<DetailsPlaceholderProps> = ({ name }: { name: string }) => {
  return <div className={styles.placeholder}>Please choose your {name ? name : "data"}...</div>;
};
