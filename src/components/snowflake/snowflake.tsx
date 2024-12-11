import { useSpring, animated } from "@react-spring/web";

const Snowflake: React.FC<{ delay: number }> = ({ delay }) => {
  const startX = Math.random() * 100;
  const amplitude = Math.random();
  const size = Math.random() * 10 + 5;

  const { y } = useSpring({
    from: { y: -10 },
    to: { y: 110 },
    config: { duration: 10000 },
    delay,
    loop: true
  });

  return (
    <animated.div
      style={{
        position: "absolute",
        left: y.to(y => `${startX + amplitude * Math.sin(y / 10)}vw`),
        top: y.to(y => `${y}vh`),
        fontSize: `${size}px`,
        color: "white"
      }}
    >
      ❄️
    </animated.div>
  );
};

export { Snowflake };
