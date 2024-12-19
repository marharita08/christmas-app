import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

type Properties = {
  src: string;
  initialValue: string;
  finalValue: string;
  width: string;
};

const AnimatedImage: React.FC<Properties> = ({
  src,
  initialValue,
  finalValue,
  width
}) => {
  const [currentTransform, setCurrentTransform] = useState(initialValue);

  const [spring, api] = useSpring(() => ({
    from: { transform: currentTransform },
    onChange: e => {
      setCurrentTransform(e.value.transform);
    },
    config: { duration: 1500 }
  }));

  const handleMouseEnter = () => {
    api.start({
      from: { transform: currentTransform },
      to: { transform: finalValue }
    });
  };

  const handleMouseLeave = () => {
    api.start({
      from: { transform: currentTransform },
      to: { transform: initialValue }
    });
  };

  return (
    <animated.img
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src={src}
      style={{
        ...spring,
        width
      }}
    />
  );
};

export { AnimatedImage };
