import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const WebsiteLayout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "400px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
