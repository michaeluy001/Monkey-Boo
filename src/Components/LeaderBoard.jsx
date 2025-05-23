import axios from "axios";
import ReturnButton from "./ReturnButton";
import { useState, useEffect } from "react";
import { GoTrophy } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

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
      <div className="bg-green-800 h-2/3 overflow-hidden ">
        <div className=" h-35 w-full  justify-items-center p-4 flex flex-col text-white ">
          <div className="text-2xl mt-5 justify-items-end">
            <ReturnButton > <IoMdClose/> </ReturnButton>
          </div>
          <div className="text-center  font-bold text-2xl">--Leaderboard--</div>
          <div className="text-sm grid grid-cols-4 gap-10 justify-items-center my-3 text-center">
            <p>RANK</p>
            <p>NAME</p>
            <p>HIGH SCORE</p>{" "}
          </div>
        </div>

        <div className="p-4 text-gray-900/70">
          <ul className="w-full  mx-auto h-65 overflow-scroll bg-green-400/30 inset-shadow-sm inset-shadow-green-800">
            {players.map((player, index) => (
              <li
                key={index}
                className=" content-center h-8 grid grid-cols-4 gap-10 justify-items-center border-b-2"
              >
                <p className="">{index + 1}</p>
                <p className="line-clamp-2 w-30 text-center">{player.playername}</p>{" "}
                <p className="">{player.playerscore}</p>
                <p className="content-center">
                  {index === 0 && <GoTrophy className="text-amber-300" />}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
