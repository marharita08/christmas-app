import styles from "./youtube-frame.module.css";

type Properties = {
  id: string;
};

const YoutubeFrame: React.FC<Properties> = ({ id }) => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.frame}
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export { YoutubeFrame };
