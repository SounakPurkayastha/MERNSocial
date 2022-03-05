import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <nav>
      <div className="topbar-container">
        <span className="topbar-logo">MERNSocial</span>
        <div className="topbar-searchbox">
          <SearchIcon className="searchbox-icon" />
          <input type="search" className="searchbox-input" />
        </div>
        <div className="profile-button-div">
          <button className="topbar-profile-button">Profile</button>
        </div>
        <div className="topbar-user">
          <img src="assets/dp.jpg" className="topbar-img" />
          <span className="topbar-username">Sounak</span>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
