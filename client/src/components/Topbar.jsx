import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">hetarbashko</div>
      <div className="topbar-center">
        <div className="topbar-searchbox">
          <SearchIcon className="searchbox-icon" />
          <input
            type="text"
            placeholder="Search for people, goblins or some shit"
            className="searchbox-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <button className="topbar-logout">Logout</button>
        <img className="topbar-dp" src="assets/dp.jpg" />
      </div>
    </div>
  );
};

export default Topbar;
