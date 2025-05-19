import { useState, useEffect } from "react";
import {shuffle} from "./GameUtility";

const useFruitsGenerator = (numberOfTiles) => {
  const [fruitBasket, setFruitBasket] = useState([]);
  useEffect(() => {
    try {
      let fruit1 = 0,
        fruit2 = 0,
        fruit3 = 0;
      switch (numberOfTiles) {
        case 9:
          (fruit1 = 6), (fruit2 = 2), (fruit3 = 1);
          break;
        default:
          (fruit1 = 0), (fruit2 = 0), (fruit3 = 0);
          break;
      }
      const fruitList = [
        {
          name: "Banana",
          pts: 1,
          imgSrc: "src/assets/banana.png",
          qty: fruit1,
        },
        {
          name: "Grapes",
          pts: 3,
          imgSrc: "src/assets/grapes.png", 
          qty: fruit2,
        },
        {
          name: "Strawberry",
          pts: 5,
          imgSrc: "src/assets/strawberry.png",
          qty: fruit3,
        },
      ];
      const temp = [];
      
      fruitList.forEach((item, index) => {
        for (let i = 0; i < item.qty; i++) {
          temp.push(item);
        }
      });
      setFruitBasket(shuffle(temp));
    } catch (err) {
      console.log("Error.", err);
    }
  }, [numberOfTiles]);

  return fruitBasket;
};

export default useFruitsGenerator;
