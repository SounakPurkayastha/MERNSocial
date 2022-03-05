import "./center.css";
import PostBox from "./PostBox";
import Post from "./Post";

const posts = [
  {
    username: "Sounak",
    age: "2 days ago",
    text: "I want to die",
  },
  {
    username: "Stan",
    age: "3 days ago",
    text: "End my suffering",
  },
  {
    username: "Kyle",
    age: "5 days ago",
    text: "Please kill me",
  },
  {
    username: "Eric",
    age: "5 days ago",
    text: "Hanging myself today",
    imageUrl: "assets/dp.jpg",
  },
  {
    username: "Kenny",
    age: "7 days ago",
    text: "Some dummy text",
  },
];

const Center = () => {
  return (
    <div>
      <PostBox />
      {posts.map((post) => {
        return (
          <Post
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
