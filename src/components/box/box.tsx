import { AnimatedImage } from "../animated-image/animated-image";
import boxImg from "@/assets/gift-box.png";

const Box: React.FC = () => {
  return (
    <AnimatedImage
      src={boxImg}
      initialValue="scale(1)"
      finalValue="scale(1.5)"
      width="50px"
    />
  );
};

export { Box };
