import Topbar from "../components/Topbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Center from "../components/Center";
import Modal from "../components/Modal";
import "./home.css";
import { useState } from "react";

const Home = () => {
  let newPosts;

  let [showModal, setShowModal] = useState(false);
  let [textareaInput, setTextareaInput] = useState("");
  const [currentPosts, setCurrentPosts] = useState([]);

  fetch("http://localhost:8000/api/users/6224dd600bf50bae155ba393/timeline")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setCurrentPosts(data);
    })
    .catch((err) => console.log(err));

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
