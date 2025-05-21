import { Footer } from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <>
      <Header />
        <div className="h-screen overflow-hidden content-center">
        <Outlet />
        </div>
      <Footer />
    </>
  );
};

export default Layout;