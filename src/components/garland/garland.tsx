import { useState, useEffect } from "react";

import { useWindowWidth } from "@/hooks/use-window-width";
import { Bulb } from "@/components/bulb/bulb";

import { colorValues, colors } from "./garland.colors";
import styles from "./garland.module.css";

const Garland: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const [garlandWidth, setGarlandWidth] = useState("90%");
  const [waves, setWaves] = useState(5);
  const [bulbCount, setBulbCount] = useState(12);
  const { width } = useWindowWidth();

  useEffect(() => {
    if (width < 768) {
      setWaves(5);
      setGarlandWidth("90%");
      setBulbCount(8);
    } else {
      setGarlandWidth("70%");
      if (width < 960) {
        setBulbCount(12);
        setWaves(8);
      } else {
        setBulbCount(16);
        setWaves(10);
      }
    }
  }, [width]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup(prevGroup => (prevGroup + 1) % 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const createWavePath = (
    garlandWidth: number,
    height: number,
    waves: number
  ) => {
    const step = garlandWidth / waves;
    let path = `M0,${height / 2}`;
    for (let i = 0; i < waves; i++) {
      const x1 = step * i + step / 2;
      const y1 = i % 2 === 0 ? 0 : height;
      const x2 = step * (i + 1);
      path += ` Q${x1},${y1} ${x2},${height / 2}`;
    }
    return path;
  };

  const height = 30;

  const pathD = createWavePath(
    (parseFloat(garlandWidth) * width) / 100,
    height,
    waves
  );

  return (
    <div className={styles.container}>
      <svg
        viewBox={`0 0 ${(parseFloat(garlandWidth) * width) / 100} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        }}
      >
        <path d={pathD} fill="none" stroke="black" strokeWidth="2" />
      </svg>

      {Array.from({ length: bulbCount }).map((_, index) => {
        const pathElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        pathElement.setAttribute("d", pathD);

        const totalLength = pathElement.getTotalLength();
        const point = pathElement.getPointAtLength(
          (index / (bulbCount - 1)) * totalLength
        );
        const color = colors[index % colors.length];
        const isGroupOne = color === "red" || color === "yellow";
        const isOn =
          (activeGroup === 0 && isGroupOne) ||
          (activeGroup === 1 && !isGroupOne);

        return (
          <Bulb
            key={index}
            color={colorValues[color]}
            x={point.x}
            y={point.y}
            isOn={isOn}
          />
        );
      })}
    </div>
  );
};

export { Garland };
