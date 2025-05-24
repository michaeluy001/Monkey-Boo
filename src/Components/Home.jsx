import Button from "./Button";
import { useNavigate } from "react-router";

import About from "./About";

const Home = () => {
  const nav = useNavigate();

  const handleStartGame = () => {
    nav("/gameplay");
  };

  const handleScoreBoard = () => {
    nav("/leaderboard");
  };

  return (
    <>
      <div className="w-full h-auto m-auto bg-yellow-800  content-center justify-items-center p-5 rounded-4xl inset-shadow-sm inset-shadow-yellow-600/80 space-y-5 sm:w-2/3 md:w-1/2 xl:w-1/3">
        <p className="text-5xl py-5 font-bold text-white text-shadow-md text-shadow-yellow-400">
          Monkey Boo!
        </p>
        <div className="flex flex-col gap-2 m-3">
          <Button type="green" onClick={handleStartGame}>
            <span className="text-white"> Start Game </span>
          </Button>
          <Button type="yellow" onClick={handleScoreBoard}>
            <span className="text-white"> LeaderBoard </span>
          </Button>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
