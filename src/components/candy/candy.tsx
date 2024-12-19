import { useSpring, animated } from "@react-spring/web";

import candyImg from "@/assets/christmas_candy.png";
import { useState } from "react";

const Candy: React.FC = () => {
  const [currentRotate, setCurrentRotate] = useState("rotate(0deg)");

  const [spring, api] = useSpring(() => ({
    from: { transform: currentRotate },
    onChange: e => {
      setCurrentRotate(e.value.transform);
    },
    config: { duration: 1500 }
  }));

  const handleMouseEnter = () => {
    api.start({
      from: { transform: currentRotate },
      to: { transform: "rotate(80deg)" }
    });
  };

  const handleMouseLeave = () => {
    api.start({
      from: { transform: currentRotate },
      to: { transform: "rotate(0deg)" }
    });
  };

  return (
    <animated.img
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src={candyImg}
      style={{
        ...spring,
        width: "40px"
      }}
    />
  );
};

export { Candy };
