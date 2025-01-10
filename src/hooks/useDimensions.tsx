import { useEffect, useState } from "react";

interface Collision {
  horizontal: number;
  vertical: number;
}

export const useDimensions = () => {
  // To move SVG
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  // To rotate
  const [rotate, setRotate] = useState(0);

  // To change direction
  const [flagHorizontal, setFlagHorizontal] = useState(true);
  const [flagVertical, setFlagVertical] = useState(true);

  // To detect borders
  const [collision, setCollision] = useState<Collision>({
    horizontal: window.innerWidth - 135,
    vertical: window.innerHeight - 210,
  });

  const getDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setCollision({
      horizontal: width - 135,
      vertical: height - 210,
    });
  };

  const moveVertical = () => {
    if (flagVertical) {
      setTop(top + 1);

      if (top >= collision.vertical) {
        setFlagVertical(false);
        setRotate((p) => p + 0.5);
      }
    } else {
      setTop(top - 1);

      if (top === 0) {
        setFlagVertical(true);
        setRotate((p) => p - 0.5);
      }
    }
  };

  const moveHorizontal = () => {
    if (flagHorizontal) {
      setLeft(left + 2);

      if (left >= collision.horizontal) {
        setFlagHorizontal(false);
        setRotate((p) => p - 0.5);
      }
    } else {
      setLeft(left - 2);

      if (left === 0) {
        setFlagHorizontal(true);
        setRotate((p) => p + 0.5);
      }
    }
  };

  // This useEffect is to get size of window
  useEffect(() => {
    // Event listener when the window is resize
    window.addEventListener("resize", getDimensions);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("resize", getDimensions);
    };
  });

  // This useEffect is to move DVD logo
  useEffect(() => {
    setTimeout(() => {
      moveVertical();
      moveHorizontal();
    }, 10);
  });

  return { top, left, rotate };
};
