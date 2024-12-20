import { Box } from "@/components/box/box";
import { Candy } from "@/components/candy/candy";

import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <Box />
      </div>
      <div className={styles.text}>
        Wishing you joy, peace, and love this Christmas season.
      </div>
      <div className={styles.candy}>
        <Candy />
      </div>
    </footer>
  );
};

export { Footer };
