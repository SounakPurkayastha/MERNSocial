import "./PostBox.css";

const PostBox = () => {
  return (
    <div>
      <div className="postbox-container">
        <img src="assets/dp.jpg" className="postbox-img" />
        <span className="post-prompt">What's on your mind?</span>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default PostBox;
