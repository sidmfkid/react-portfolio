import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Watch from "./components/Watch";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import HomeIcon from "./Menu/HomeIcon.svg";
import MusicIcon from "./Menu/MusicIcon.svg";
import BracketIcon from "./Menu/BracketIcon.svg";
import AdobeIcon from "./Menu/AdobeIcon.svg";
import AdsIcon from "./Menu/AdIcon.svg";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route
          exact
          path="/watch"
          element={<Watch menuExpanded={isToggled} />}
        />
        <Route path="/" element={<Home menuExpanded={isToggled} />} />
      </Routes>
    </>
  );
}

export default App;
