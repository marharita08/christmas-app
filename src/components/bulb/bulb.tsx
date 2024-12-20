import { useSpring, animated } from "@react-spring/web";

type Properties = {
  color: {
    active: string;
    dark: string;
  };
  isOn: boolean;
  x: number;
  y: number;
};

const Bulb: React.FC<Properties> = ({ color, isOn, x, y }) => {
  const styles = useSpring({
    boxShadow: isOn
      ? `0px 0px 15px 2px ${color.active}`
      : `0px 0px 0px 0px ${color.dark}`,
    backgroundColor: isOn ? color.active : color.dark,
    config: { tension: 200, friction: 15 }
  });

  return (
    <animated.div
      style={{
        ...styles,
        position: "absolute",
        left: x,
        top: y,
        width: 20,
        height: 20,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        willChange: "box-shadow, transform, background-color"
      }}
    />
  );
};

export { Bulb };
