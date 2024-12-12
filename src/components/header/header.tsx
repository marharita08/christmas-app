import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className={styles.title}>Merry Christmas!</h1>
    </header>
  );
};

export { Header };
