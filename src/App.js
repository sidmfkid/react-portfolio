import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Nav from "./components/Nav.js";
import "./css/App.css";

function App() {
  const [isToggled, menuToggler] = useState(false);

  const toggle = () => {
    menuToggler((prev) => !prev);
    console.log(isToggled);
  };

  return (
    <>
      <Nav isToggled={isToggled} menuToggler={toggle} />
      <SideMenu isExpanded={isToggled} />
    </>
  );
}

export default App;
