import "./ModalBox.css";
import { useState } from "react";

const ModalBox = (props) => {
  const clickHandler = (e) => {
    e.stopPropagation();
  };

  const text = props.textareaInput;

  return (
    <div className="modal-post-box" onClick={clickHandler}>
      <img className="modal-box-img" src="assets/dp.jpg" />
      <div className="modal-user">
        <div className="modal-username">Sounak</div>
        <div className="modal-useremail">@lord_penguin</div>
      </div>
      <form onSubmit={props.postHandler}>
        <textarea
          onInput={props.textareaInputHandler}
          className="modal-textarea"
          placeholder="What's on your mind?"
          value={text}
        ></textarea>
        <button type={text ? "submit" : "button"} className="modal-post-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default ModalBox;
