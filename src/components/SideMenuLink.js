function SideMenuLink(props) {
  return (
    <div className="sidebar__container-button">
      <img
        className="sidebar__container-button--homeIcon"
        src={props.icon}
        alt="Home Icon"
      ></img>
      <div className="sidebar__container-button--text">
        <span>{props.text}</span>
      </div>
    </div>
  );
}

export default SideMenuLink;
