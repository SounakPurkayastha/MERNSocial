import "./ModalBox.css";
import { useState } from "react";

const ModalBox = () => {
  let [textareaInput, setTextareaInput] = useState("");

  const clickHandler = (e) => {
    e.stopPropagation();
  };

  const postHandler = (e) => {
    e.preventDefault();
    console.log(textareaInput);
  };

  const textareaInputHandler = (e) => {
    setTextareaInput(e.target.value);
  };

  return (
    <div className="modal-post-box" onClick={clickHandler}>
      <img className="modal-box-img" src="assets/dp.jpg" />
      <div className="modal-user">
        <div className="modal-username">Sounak</div>
        <div className="modal-useremail">@lord_penguin</div>
      </div>
      <form onSubmit={postHandler}>
        <textarea
          onInput={textareaInputHandler}
          name="post-text"
          className="modal-textarea"
          placeholder="What's on your mind?"
        ></textarea>
        <button type="submit" className="modal-post-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default ModalBox;
