import "./PostBox.css";

const PostBox = (props) => {
  return (
    <div>
      <div className="postbox-container">
        <img src="assets/dp.jpg" className="postbox-img" />
        <span className="post-prompt" onClick={props.clickHandler}>
          What's on your mind?
        </span>
      </div>
    </div>
  );
};

export default PostBox;
