import { Candy } from "../candy/candy";
import { Box } from "../box/box";

import styles from "./animated-images.module.css";

const AnimatedImages: React.FC = () => {
  return (
    <>
      <div className={`${styles.candy} ${styles.firstCandy}`}>
        <Candy />
      </div>
      <div className={`${styles.candy} ${styles.secondCandy}`}>
        <Candy />
      </div>
      <div className={`${styles.candy} ${styles.thirdCandy}`}>
        <Candy />
      </div>
      <div className={`${styles.candy} ${styles.fourthCandy}`}>
        <Candy />
      </div>
      <div className={`${styles.candy} ${styles.fifthCandy}`}>
        <Candy />
      </div>

      <div className={`${styles.box} ${styles.firstBox}`}>
        <Box />
      </div>
      <div className={`${styles.box} ${styles.secondBox}`}>
        <Box />
      </div>
      <div className={`${styles.box} ${styles.thirdBox}`}>
        <Box />
      </div>
    </>
  );
};

export { AnimatedImages };
