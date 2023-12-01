import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const WebsiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
