import { Snowflake } from "@/components/snowflake/snowflake";

import styles from "./snowfall.module.css";

const Snowfall: React.FC = () => {
  const snowflakes = Array.from({ length: 100 });

  return (
    <div className={styles.container}>
      {snowflakes.map((_, index) => (
        <Snowflake key={index} delay={Math.random() * 10000} />
      ))}
    </div>
  );
};

export { Snowfall };
