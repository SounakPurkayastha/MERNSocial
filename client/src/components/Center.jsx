import "./center.css";
import PostBox from "./PostBox";
import Post from "./Post";
import { useState } from "react";

const Center = (props) => {
  return (
    <div>
      <PostBox clickHandler={props.clickHandler} />
      {props.currentPosts.map((post) => {
        return (
          <Post
            key={post.id}
            username={post.username}
            age={post.age}
            text={post.text}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Center;
