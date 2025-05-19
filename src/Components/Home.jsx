import Button from "./Button";
import { useNavigate } from "react-router";

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
      
        <div className="w-100 h-100 content-center justify-items-center">
          <span className="text-5xl font-bold text-white"> Monkey Boo!</span>
          <div className="flex flex-col gap-2 m-3">
            <Button type="green" onClick={handleStartGame}>
              <span className="text-white"> Start Game </span>
            </Button>
            <Button type="yellow" onClick={handleScoreBoard}>
              <span className="text-white"> LeaderBoard </span>
            </Button>
          </div>
        </div>
     
    </>
  );
};

export default Home;
