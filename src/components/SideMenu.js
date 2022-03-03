import "../css/sideMenu.css";
import HomeIcon from "../Menu/HomeIcon.svg";

function SideMenu(props) {
  return (
    <div className={props.isExpanded ? "sidebar show" : "sidebar"}>
      <div className="sidebar__button-container">
        <img src={HomeIcon} alt="Home Icon"></img>
      </div>
    </div>
  );
}

export default SideMenu;
