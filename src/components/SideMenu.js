import "../css/sideMenu.css";
import SideMenuLink from "./SideMenuLink";

function SideMenu(props) {
  const icons = props.icons;
  const currentPath = window.location.pathname.replace("/", "");
  console.log(currentPath);
  const menuLinks = icons.map((icon) => (
    <SideMenuLink currentPath={currentPath} icon={icon.icon} text={icon.text} />
  ));

  return (
    <div className={props.isExpanded ? "sidebar show" : "sidebar"}>
      <div className="sidebar__container">{menuLinks}</div>
    </div>
  );
}

export default SideMenu;
