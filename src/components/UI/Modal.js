import Card from "./Card";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  const isIntroFinished = props.isIntroFinished;

  return (
    <div
      className={
        props.cookies.isIntroFinished === "true" ||
        props.step.index > 6 ||
        isIntroFinished === true
          ? "back-drop hide"
          : "back-drop"
      }
    ></div>
  );
};

const ModalOverlay = (props) => {
  console.log(props.position);
  const handleIntroState = props.handleIntroState;
  const isIntroFinished = props.isIntroFinished;
  const modalClick = (e) => {
    props.onModalClick(e);
    handleIntroState(e);
  };

  const exitModal = (e) => {
    handleIntroState(e);
  };

  let cardModal = (
    <Card position={props.position} currentStep={props.step.index}>
      <div className="modal-heading">
        <span>Welcome to Sidtube</span>
      </div>
      <div className="modal-subheading">
        <span>Let me show you around the place.</span>
      </div>
      <div className="modal-button">
        <button step="0" onClick={modalClick}>
          <span>Next</span>
          <img src={props.ArrowIcon} alt="Next Button"></img>
        </button>
      </div>
      <div className="modal-exit">
        <button className="modal-exit-button" onClick={exitModal}>
          <span></span>
        </button>
      </div>
    </Card>
  );

  if (props.step.index > 0 && props.step.index <= 6) {
    cardModal = (
      <Card position={props.position} currentStep={props.step.index}>
        <div className="modal-heading">
          <span>{props.step.step.heading}</span>
        </div>
        <div className="modal-subheading">
          <span>{props.step.step.subheading}</span>
        </div>
        <div className="modal-button">
          <button step={props.step.index} onClick={modalClick}>
            <span>Next</span>
            <img src={props.ArrowIcon} alt="Next Button"></img>
          </button>
        </div>
        <div className="modal-exit">
          <button className="modal-exit-button" onClick={exitModal}>
            <span></span>
          </button>
        </div>
      </Card>
    );
  }

  if (
    props.cookies.isIntroFinished === "true" ||
    isIntroFinished === true ||
    props.step.index === null ||
    props.step.index > 6
  ) {
    cardModal = "";
  }

  return <>{cardModal}</>;
};

const Modal = (props) => {
  const handleIntroState = props.handleIntroState;
  const isIntroFinished = props.isIntroFinished;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          cookies={props.cookies}
          isIntroFinished={isIntroFinished}
          step={props.step}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          cookies={props.cookies}
          handleIntroState={handleIntroState}
          isIntroFinished={isIntroFinished}
          position={props.position}
          onModalClick={props.onModalClick}
          ArrowIcon={props.ArrowIcon}
          step={props.step}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
