import menuIcon from "../menuIcon.svg";
import React from "react";
import Nav from "./Nav";

class MenuButton extends Nav {
  constructor(props) {
    super(props);
    this.props = { isExpanded: true };
  }

  render() {
    return (
      <div className="menu-container">
        <img className="menu-icon" src={menuIcon} alt="Menu Button" />
        {this.props.isExpanded}
      </div>
    );
  }
}

export default MenuButton;
