import styles from "./content-container.module.css";

type Properties = {
  children: React.ReactNode;
};

const ContentContainer: React.FC<Properties> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export { ContentContainer };
