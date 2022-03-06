import "./Modal.css";
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
      <ModalBox onClick={clickHandler} />
    </div>
  );
};

export default Modal;
