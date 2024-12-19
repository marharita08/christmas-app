import { SectionContainer } from "../section-container/section-container";
import { SectionHeader } from "../section-header/section-header";

import { AnimatedImage } from "../animated-image/animated-image";

import frozenImg from "@/assets/frozen.jpeg";
import grinchImg from "@/assets/grinch.jpg";
import klausImg from "@/assets/klaus.jpg";
import riseOfTheGuardiansImg from "@/assets/rise-of-the-guardians.jpg";

import styles from "./movies.module.css";

const images = [frozenImg, grinchImg, klausImg, riseOfTheGuardiansImg];

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
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export { Movies };
