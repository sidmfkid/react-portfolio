import Card from "./Card";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
    return <div className="back-drop"></div>
}

const ModalOverlay = (props) => {
  return (
      <><Backdrop /><Card>
          <div className="modal-heading">
              <span>Welcome to Sidtube</span>
          </div>
          <div className="modal-subheading">
              <span>Let me show you around the place.</span>
          </div>
          <div className="modal-button">
              <button>
                  <span>Next</span>
                  <img src={props.ArrowIcon} alt="Next Button"></img>
              </button>
          </div>
      </Card></>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
              {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay ArrowIcon={props.ArrowIcon} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
