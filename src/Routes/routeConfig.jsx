import Layout from "../Components/Layout";
import Home from "../Components/Home";
import GamePlay from "../Components/GamePlay";
import LeaderBoard from "../Components/LeaderBoard";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "gameplay", element: <GamePlay /> },
      { path: "leaderboard", element: <LeaderBoard /> },
    ],
  },
];

export default routes;
