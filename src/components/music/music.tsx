import { SectionHeader } from "../section-header/section-header";
import { YoutubeFrame } from "../youtube-frame/youtube-frame";

import styles from "./music.module.css";

const Music: React.FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeader
        title="Music"
        text="Take a moment to listen to some chosen carols."
      />
      <YoutubeFrame id="EKkzbbLYPuI" />
      <YoutubeFrame id="izx1P9jvLw0" />
      <YoutubeFrame id="7bx4S2YGS48" />
    </div>
  );
};

export { Music };
