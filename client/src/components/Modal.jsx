import "./Modal.css";
import { useState } from "react";
import ModalBox from "./ModalBox";

const Modal = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div
      onClick={props.onClick}
      className={
        props.showModal ? "modal-container-visible" : "modal-container"
      }
    >
      <ModalBox
        textareaInput={props.textareaInput}
        onClick={clickHandler}
        textareaInputHandler={props.textareaInputHandler}
        postHandler={props.postHandler}
      />
    </div>
  );
};

export default Modal;
