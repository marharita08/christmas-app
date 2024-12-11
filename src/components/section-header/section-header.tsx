import styles from "./section-header.module.css";

type Properties = {
  title: string;
  text: string;
};

const SectionHeader: React.FC<Properties> = ({ text, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export { SectionHeader };
