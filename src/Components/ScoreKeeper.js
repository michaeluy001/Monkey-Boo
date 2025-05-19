import { useState, useEffect } from "react";
const useClickedTilesCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
 
    
  return {count, increment}
};

export { useClickedTilesCounter };
