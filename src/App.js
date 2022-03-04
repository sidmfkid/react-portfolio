import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import Nav from "./components/Nav.js";
import HomeIcon from "./Menu/HomeIcon.svg";
import MusicIcon from "./Menu/MusicIcon.svg";
import BracketIcon from "./Menu/BracketIcon.svg";
import AdobeIcon from "./Menu/AdobeIcon.svg";
import AdsIcon from "./Menu/AdIcon.svg";
import "./css/App.css";

function App() {
  const [isToggled, menuToggler] = useState(false);
  const icons = [
    {
      icon: HomeIcon,
      text: "Home",
    },
    { icon: MusicIcon, text: "Music" },
    { icon: BracketIcon, text: "Dev Work" },
    { icon: AdobeIcon, text: "Design" },
    { icon: AdsIcon, text: "Ads" },
  ];
  const toggle = () => {
    menuToggler((prev) => !prev);
    console.log(isToggled);
  };

  return (
    <>
      <Nav isToggled={isToggled} menuToggler={toggle} />
      <SideMenu isExpanded={isToggled} icons={icons} />
      <Main menuExpanded={isToggled} />
    </>
  );
}

export default App;
