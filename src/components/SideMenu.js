import "../css/sideMenu.css";
import SideMenuLink from "./SideMenuLink";

function SideMenu(props) {
  const icons = props.icons;
  const menuLinks = icons.map((icon) => (
    <SideMenuLink icon={icon.icon} text={icon.text} />
  ));

  return (
    <div className={props.isExpanded ? "sidebar show" : "sidebar"}>
      <div className="sidebar__container">{menuLinks}</div>
    </div>
  );
}

export default SideMenu;
