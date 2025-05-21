import axios from "axios";
import ReturnButton from "./ReturnButton";
import { useState, useEffect } from "react";
import { GoTrophy } from "react-icons/go";

const LeaderBoard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const result = await axios.get("http://localhost:3000");
        setPlayers(result.data);
      } catch (err) {
        console.error("Error fetching players", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) return <p className="text-3xl text-center">Loading...</p>;
  if (error) return <p> {error.message}</p>;

  return (
    <>
      <div className="h-1/2 w-full bg-green-800 justify-items-center p-4 flex flex-col text-white overflow-hidden">
        <div className="text-2xl">
          <ReturnButton />
        </div>
        <div className="text-center h-15 font-bold text-2xl">
          --Leaderboard--
        </div>
        <div className="text-sm grid grid-cols-4 gap-10 justify-items-center my-3 text-center">
          <p>RANK</p>
          <p>NAME</p>
          <p>HIGH SCORE</p>{" "}
        </div>
        <ul className="w-full mx-auto">
          {players.map((player, index) => (
            <li
              key={index}
              className="grid grid-cols-4 gap-10 justify-items-center border-b-2"
            >
              <p className="">{index + 1}</p>
              <p className="">{player.playername}</p>{" "}
              <p className="">{player.playerscore}</p>
              <p className="content-center">
                {index === 0 && <GoTrophy className="text-amber-300" />}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeaderBoard;
