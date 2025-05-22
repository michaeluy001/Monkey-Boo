import mockingMonkey from '/src/assets/mocking monkey.gif'
import { useState, useEffect } from "react";

const usePlaceMonkey = (numberOfTiles) => {
  const [index, setIndex] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * numberOfTiles);
    setIndex(randomIndex);
  }, []);

  return index;
};

const useInitializeMonkey = (monkeyToInit) => {
  const [info, setInfo] = useState({ imgSrc: "", alt: "" });
  useEffect(() => {
    switch (monkeyToInit) {
      case "Monkeyboo":
        setInfo({ imgSrc: mockingMonkey, alt: "Monkey Boo" });
        break;
      default:
        setInfo({ imgSrc: "", alt: "Monkey Boo"  });
        break;
    }
  }, []);
  return info;
};

export { usePlaceMonkey, useInitializeMonkey };
