import Topbar from "../components/Topbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Center from "../components/Center";
import Modal from "../components/Modal";
import ModalBox from "../components/ModalBox";
import "./home.css";
import { useState } from "react";

const Home = () => {
  let [showModal, setShowModal] = useState(false);
  //let showModal = false;

  const onClickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Modal showModal={showModal} onClick={onClickHandler} />
      <Topbar />
      <div className="main-content">
        <div className="left-sidebar-container">
          <LeftSidebar />
        </div>
        <div className="left-sidebar-undercontainer"></div>
        <div className="center-container">
          <Center clickHandler={onClickHandler} />
        </div>
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
