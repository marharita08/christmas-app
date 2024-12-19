import { Candy } from "../candy/candy";

import styles from "./candies.module.css";

const Candies: React.FC = () => {
  return (
    <>
      <div className={`${styles.candy} ${styles.first}`}>
        <Candy />
      </div>
      <div className={`${styles.candy} ${styles.second}`}>
        <Candy />
      </div>
    </>
  );
};

export { Candies };
