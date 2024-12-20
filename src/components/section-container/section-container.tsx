import styles from "./section-container.module.css";

type Properties = {
  children: React.ReactNode;
};

const SectionContainer: React.FC<Properties> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export { SectionContainer };
