import { Footer } from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;