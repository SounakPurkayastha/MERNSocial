import "./Post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";

const Post = (props) => {
  let [likes, setLikes] = useState(0);
  let [liked, setLiked] = useState(false);

  const likeButtonHandler = () => {
    setLiked(!liked);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  return (
    <div className="post-container">
      <div className="post-top-content">
        <img className="post-user-img" src="assets/dp.jpg" />
        <div className="post-user-details">
          <span className="post-user-details-name">{props.username}</span>
          {/*<span className="post-time-ago">{props.email}</span>*/}
        </div>
      </div>
      <div className="post-text">{props.text}</div>
      {props.imageUrl ? (
        <img className="post-image" src={props.imageUrl} />
      ) : null}
      <div className="post-reactions">
        {likes != 0 ? (
          <div className="like-count">
            <ThumbUpIcon className="like-count-icon" />
            {likes}
          </div>
        ) : null}
      </div>
      <hr />
      <div className="post-buttons">
        <button className="post-card-button" onClick={likeButtonHandler}>
          {liked ? (
            <ThumbUpIcon className="post-card-button-icon" />
          ) : (
            <ThumbUpOutlinedIcon className="post-card-button-icon" />
          )}
          Like
        </button>
        <button className="post-card-button">
          <CommentIcon className="postcard-comment-icon" /> Comment
        </button>
        <button className="post-card-button">
          <ShareIcon className="postcard-share-icon" /> Share
        </button>
      </div>
    </div>
  );
};

export default Post;
