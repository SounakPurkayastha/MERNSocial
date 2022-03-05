import "./Post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Post = (props) => {
  return (
    <div className="post-container">
      <div className="post-top-content">
        <img className="post-user-img" src="assets/dp.jpg" />
        <div className="post-user-details">
          <span className="post-user-details-name">{props.username}</span>
          <span className="post-time-ago">{props.age}</span>
        </div>
      </div>
      <div className="post-text">{props.text}</div>
      <img className="post-image" src={props.imageUrl} />
      <hr />
      <div className="post-buttons">
        <button className="post-card-button">
          <ThumbUpOutlinedIcon className="post-card-button-icon" />
          Like
        </button>
        <button className="post-card-button">Comment</button>
        <button className="post-card-button">Share</button>
      </div>
    </div>
  );
};

export default Post;
