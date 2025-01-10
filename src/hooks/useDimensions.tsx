import { useEffect, useState } from "react";

interface Collision {
  horizontal: number;
  vertical: number;
}

const colors = [
  "#60D833",
  "#D500F9",
  "#651FFF",
  "#EF5350",
  "#FF8F00",
  "#F4FF81",
  "#BCAAA4",
  "#B0BEC5",
  "#9DE7D7",
  "#00B08B",
  "#FF585D",
  "#8DB9CA",
];

export const useDimensions = () => {
  // To move SVG
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  // To change color
  const [color, setColor] = useState("#60D833");

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

  const moveVertical = (numColor: number) => {
    if (flagVertical) {
      setTop(top + 1);

      if (top >= collision.vertical) {
        setFlagVertical(false);
        setColor(colors[numColor]);
        setRotate((p) => p + 0.5);
      }
    } else {
      setTop(top - 1);

      if (top === 0) {
        setFlagVertical(true);
        setColor(colors[numColor]);
        setRotate((p) => p - 0.5);
      }
    }
  };

  const moveHorizontal = (numColor: number) => {
    if (flagHorizontal) {
      setLeft(left + 2);

      if (left >= collision.horizontal) {
        setFlagHorizontal(false);
        setColor(colors[numColor]);
        setRotate((p) => p - 0.5);
      }
    } else {
      setLeft(left - 2);

      if (left === 0) {
        setFlagHorizontal(true);
        setColor(colors[numColor]);
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
      // Generate a random number to change the color
      const random = Math.round(Math.random() * (colors.length - 1));

      moveVertical(random);
      moveHorizontal(random);
    }, 10);
  });

  return { color, top, left, rotate };
};
