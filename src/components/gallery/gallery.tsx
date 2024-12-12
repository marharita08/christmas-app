import { useState } from "react";

import { SectionHeader } from "@/components/section-header/section-header.tsx";
import { SectionContainer } from "@/components/section-container/section-container";
import { photos } from "@/configs/photos";

import styles from "./gallery.module.css";

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      prevIndex => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <SectionContainer>
      <SectionHeader title="Gallery" text="Enjoy my festive gallery!" />
      <div className={styles.activePhoto}>
        <button className={styles.prevButton} onClick={handlePrev}>
          ❮
        </button>
        <img src={photos[activeIndex].src} alt={photos[activeIndex].alt} />
        <button className={styles.nextButton} onClick={handleNext}>
          ❯
        </button>
      </div>
      <div className={styles.thumbnailContainer}>
        {photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className={`${styles.thumbnail} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export { Gallery };
