import { FC, useEffect, useState } from "react";
import { Loader as LoaderIcon } from "react-feather";
import styles from "./loader.module.css";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsTimeout(true), 2000);
  }, []);

  return (
    <div className={`${styles.animationContainer} ${styles.loaderBox} `}>
      {isTimeout ? <div>No description available</div> : <LoaderIcon className={styles.rotate} size={64} />}
    </div>
  );
};
