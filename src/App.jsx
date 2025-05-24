import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/AppRoutes";


const App = () => {
  return (
    <>
        <BrowserRouter basename="/Monkey-Boo/">
          <AppRoutes />
        </BrowserRouter>

    </>
  );
};

export default App;
