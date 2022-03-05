import Topbar from "../components/Topbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Center from "../components/Center";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="main-content">
        <div className="left-sidebar-container">
          <LeftSidebar />
        </div>
        <div className="center-container">
          <Center />
        </div>
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
