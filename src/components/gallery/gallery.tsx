import { useState, useEffect } from "react";
import { animated, useTransition, useSprings } from "@react-spring/web";

import { SectionHeader } from "@/components/section-header/section-header.tsx";
import { SectionContainer } from "@/components/section-container/section-container";

import { photos } from "./photos";
import styles from "./gallery.module.css";

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(active => (active + 1) % photos.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const transitions = useTransition([activeIndex], {
    from: { opacity: 0, transform: "translateX(-20px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(20px)" },
    config: { tension: 200, friction: 20 }
  });

  const thumbnailSprings = useSprings(
    photos.length,
    photos.map((_, index) => ({
      transform: index === activeIndex ? "scale(1.1)" : "scale(1)",
      boxShadow:
        index === activeIndex
          ? "0 4px 8px rgba(0, 0, 0, 0.4)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      config: { tension: 250, friction: 20 }
    }))
  );

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
      <SectionHeader title="Gallery" text="Enjoy festive gallery!" />
      <div className={styles.activePhoto}>
        <button className={styles.prevButton} onClick={handlePrev}>
          ❮
        </button>

        {transitions((styles, index) => (
          <animated.img
            src={photos[index].src}
            alt={photos[index].alt}
            style={{
              position: "absolute",
              ...styles
            }}
          />
        ))}
        <button className={styles.nextButton} onClick={handleNext}>
          ❯
        </button>
      </div>
      <div className={styles.thumbnailContainer}>
        {thumbnailSprings.map((springStyles, index) => (
          <animated.img
            key={photos[index].id}
            src={photos[index].src}
            alt={photos[index].alt}
            style={springStyles}
            className={styles.thumbnail}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export { Gallery };
