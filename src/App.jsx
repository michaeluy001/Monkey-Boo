import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/AppRoutes";


const App = () => {
  return (
    <>
      
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
     
    </>
  );
};

export default App;
