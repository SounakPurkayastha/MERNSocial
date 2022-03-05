import "./user-card.css";

const UserCard = () => {
  return (
    <div className="user-card-container">
      <img src="assets/dp.jpg" />
      <div className="user-card-desc">
        <div className="user-card-name">Sounak</div>
        <div className="user-card-email">@lord_penguin</div>
      </div>
    </div>
  );
};

export default UserCard;
