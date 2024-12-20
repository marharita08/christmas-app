import { AnimatedImage } from "@/components/animated-image/animated-image";
import candyImg from "@/assets/christmas_candy.png";

const Candy: React.FC = () => {
  return (
    <AnimatedImage
      src={candyImg}
      initialValue="rotate(0deg)"
      finalValue="rotate(80deg)"
      width="40px"
    />
  );
};

export { Candy };
