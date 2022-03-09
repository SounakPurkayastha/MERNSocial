import "./center.css";
import PostBox from "./PostBox";
import Post from "./Post";
import { useState } from "react";

const Center = (props) => {
  return (
    <div>
      <PostBox clickHandler={props.clickHandler} />
      {props.currentPosts.map((post) => {
        console.log(post);
        return (
          <Post
            key={post._id}
            username={post.userId.username}
            text={post.text}
          />
        );
      })}
    </div>
  );
};

export default Center;
