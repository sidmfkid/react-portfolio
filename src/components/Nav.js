import logoIcon from "../Menu/logoIcon.svg";
import searchIcon from "../Menu/searchIcon.svg";
import micIcon from "../Menu/micIcon.svg";
import videoIcon from "../Menu/videoIcon.svg";
import bellIcon from "../Menu/bellIcon.svg";
import aviIcon from "../Menu/aviIcon.svg";
import squareMenuIcon from "../Menu/squareMenuIcon.svg";
import MenuButton from "./MenuButton";
import React from "react";
import "../css/nav.css";

function Nav(props) {
  const toggle = props.menuToggler;
  const isToggled = props.isToggled;
  // const isMenuExpanded = this.state.isMenuExpanded;
  // let button;
  // if (isMenuExpanded) {
  //   button = <MenuButton onClick={this.handleCloseClick} />;
  // } else {
  //   button = <MenuButton onClick={this.handleExpandClick} />;
  // }

  return (
    <header
      className={
        props.currentStep.index === 5
          ? "nav-container focused"
          : "nav-container"
      }
    >
      <div className="nav-container__content">
        <div className="nav-container__content-right">
          <MenuButton toggle={toggle} isToggled={isToggled} />
          <div className="logo-container">
            <img className="logo-icon" src={logoIcon} alt="Logo Icon" />
            <span className="logo-title">SidTube</span>
          </div>
        </div>
        <div className="nav-container__content-center">
          <div className="search-container">
            <form>
              <input type="text"></input>
            </form>
            <div className="search-button-container">
              <img className="search-icon" src={searchIcon} alt="Logo Icon" />
            </div>
          </div>
          <div className="mic-icon-container">
            <img className="mic-icon" src={micIcon} alt="Mic Icon" />
          </div>
        </div>
        <div className="nav-container__content-left">
          <div className="video-icon-container">
            <img className="video-icon" src={videoIcon} alt="Video Icon" />
          </div>
          <div className="menu-icon-container">
            <img
              className="square-menu-icon"
              src={squareMenuIcon}
              alt="Square Menu Icon"
            />
          </div>
          <div className="notification-icon-container">
            <img className="bell-icon" src={bellIcon} alt="Bell Icon" />
          </div>
          <div className="avi-icon-container">
            <img className="avi-icon" src={aviIcon} alt="Avi Icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
