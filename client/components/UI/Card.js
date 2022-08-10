import React from "react";

const Card = (props) => {
  return (
    <div
      className={
        props.currentStep ? `modal step-${props.currentStep}` : "modal"
      }
      style={
        props.position
          ? {
              top: props.position.previousSibling.offsetTop - 100,
              left: props.position.previousSibling.offsetLeft,
            }
          : {}
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
