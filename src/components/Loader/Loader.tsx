import { FC, useEffect, useState } from "react";
import { Loader as LoaderIcon } from "react-feather";
import styles from "./loader.module.css";

export const Loader: FC = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsTimeout(true), 2000);
  }, []);

  return (
    <div className={styles.animationContainer}>
      {isTimeout ? <div>No description available</div> : <LoaderIcon className={styles.rotate} size={64} />}
    </div>
  );
};
