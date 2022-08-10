import React from "react";

import SideMenuLink from "./SideMenuLink";

function SideMenu(props) {
  const icons = props.icons;
  const currentPath = window.location.pathname.replace("/", "");
  console.log(currentPath);
  const menuLinks = icons.map((icon) => (
    <SideMenuLink currentPath={currentPath} icon={icon.icon} text={icon.text} />
  ));
  let elClass = "sidebar";

  if (props.currentStep.index === 4) {
    elClass = "sidebar focused";
  }
  if (props.isExpanded) {
    elClass = "sidebar show";
  }

  return (
    <div className={elClass}>
      <div className="sidebar__container">{menuLinks}</div>
    </div>
  );
}

export default SideMenu;
