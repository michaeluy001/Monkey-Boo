import { useRoutes } from "react-router";
import  routes  from "./routeConfig";


const AppRoutes = () => {
    const element = useRoutes(routes);
    return element;
}

export default AppRoutes;