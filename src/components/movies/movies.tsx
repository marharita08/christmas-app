import { SectionContainer } from "@/components/section-container/section-container";
import { SectionHeader } from "@/components/section-header/section-header";
import { AnimatedImage } from "@/components/animated-image/animated-image";

import { images } from "./images";
import styles from "./movies.module.css";

const Movies: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader
        title="Movies"
        text="Cheer yourself up with Christmas movies!"
      />
      <div className={styles.movies}>
        {images.map(image => (
          <AnimatedImage
            src={image}
            initialValue="scale(1)"
            finalValue="scale(1.05)"
            width="200px"
            duration={300}
            key={image}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export { Movies };
