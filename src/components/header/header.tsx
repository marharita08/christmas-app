import { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";

import styles from "./header.module.css";

const Header: React.FC = () => {
  const [showHeading, setShowHeading] = useState(false);

  const transitions = useTransition([showHeading], {
    from: { opacity: 0, transform: "translateY(-30px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-30px)" },
    config: { duration: 800 }
  });

  useEffect(() => {
    setShowHeading(true);
  }, []);

  return (
    <header className={styles.header}>
      {transitions((transitionStyles, item) => (
        <animated.div style={transitionStyles}>
          {item && (
            <>
              <h1 className={styles.title}>Merry Christmas!</h1>
              <p className={styles.subtitle}>And a Happy New Year!</p>
            </>
          )}
        </animated.div>
      ))}
    </header>
  );
};

export { Header };
