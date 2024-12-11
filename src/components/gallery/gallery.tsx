import { useState } from "react";

import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";

import styles from "./gallery.module.css";

const photos = [
  { id: 1, src: photo1, alt: "photo 1" },
  { id: 2, src: photo2, alt: "photo 2" },
  { id: 3, src: photo3, alt: "photo 3" },
  { id: 4, src: photo4, alt: "photo 4" },
  { id: 5, src: photo5, alt: "photo 5" },
  { id: 6, src: photo6, alt: "photo 6" },
  { id: 7, src: photo7, alt: "photo 7" }
];

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
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.text}>Enjoy my festive gallery!</p>
      </div>
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
    </div>
  );
};

export { Gallery };
