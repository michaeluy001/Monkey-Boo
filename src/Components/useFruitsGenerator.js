import { useState, useEffect } from "react";
import {shuffle} from "./GameUtility";
import banana from '/src/assets/banana.png'
import grapes from '/src/assets/grapes.png'
import strawberry from '/src/assets/strawberry.png'


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
          imgSrc: banana,
          qty: fruit1,
        },
        {
          name: "Grapes",
          pts: 3,
          imgSrc: grapes,
          qty: fruit2,
        },
        {
          name: "Strawberry",
          pts: 5,
          imgSrc: strawberry,
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
