import Topbar from "../components/Topbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Center from "../components/Center";
import Modal from "../components/Modal";
import ModalBox from "../components/ModalBox";
import "./home.css";
import { useState } from "react";

const Home = () => {
  const posts = [
    {
      id: 1,
      username: "Sounak",
      age: "2 days ago",
      text: "I want to die",
    },
    {
      id: 2,
      username: "Stan",
      age: "3 days ago",
      text: "End my suffering",
    },
    {
      id: 3,
      username: "Kyle",
      age: "5 days ago",
      text: "Please kill me",
    },
    {
      id: 4,
      username: "Eric",
      age: "5 days ago",
      text: "Hanging myself today",
      imageUrl: "assets/dp.jpg",
    },
    {
      id: 5,
      username: "Kenny",
      age: "7 days ago",
      text: "Some dummy text",
    },
  ];
  let [showModal, setShowModal] = useState(false);
  let [textareaInput, setTextareaInput] = useState("");
  const [currentPosts, setCurrentPosts] = useState(posts);
  //let showModal = false;

  const textareaInputHandler = (e) => {
    setTextareaInput(e.target.value);
  };

  const onClickHandler = () => {
    setShowModal(!showModal);
  };

  const postHandler = (e) => {
    setCurrentPosts([
      { username: "Sounak", age: "10 days ago", text: textareaInput },
      ...currentPosts,
    ]);
    setTextareaInput("");
    e.preventDefault();
    onClickHandler();
  };

  return (
    <div>
      <Modal
        showModal={showModal}
        onClick={onClickHandler}
        textareaInputHandler={textareaInputHandler}
        postHandler={postHandler}
        textareaInput={textareaInput}
      />
      <Topbar />
      <div className="main-content">
        <div className="left-sidebar-container">
          <LeftSidebar />
        </div>
        <div className="left-sidebar-undercontainer"></div>
        <div className="center-container">
          <Center clickHandler={onClickHandler} currentPosts={currentPosts} />
        </div>
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
