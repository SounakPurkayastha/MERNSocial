import { useState } from "react";
import "./PostBox.css";

const PostBox = () => {
  let showModal = false;
  return (
    <div>
      <div className="postbox-container" onClick={(showModal = true)}>
        <img src="assets/dp.jpg" className="postbox-img" />
        <span className="post-prompt">What's on your mind?</span>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default PostBox;
