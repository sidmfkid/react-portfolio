import menuIcon from "../menuIcon.svg";
import React from "react";

function MenuButton(props) {
  return (
    <div onClick={props.toggle} className="menu-container">
      <img className="menu-icon" src={menuIcon} alt="Menu Button" />
    </div>
  );
}

export default MenuButton;
