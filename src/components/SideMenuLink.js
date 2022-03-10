function SideMenuLink(props) {
  console.log(props.currentPath, props.text);
  return (
    <a
      href="/"
      className={
        props.currentPath === props.text.toLowerCase()
          ? "sidebar__container-button active"
          : "sidebar__container-button"
      }
    >
      <img
        className="sidebar__container-button--homeIcon"
        src={props.icon}
        alt="Home Icon"
      ></img>
      <div className="sidebar__container-button--text">
        <span>{props.text}</span>
      </div>
    </a>
  );
}

export default SideMenuLink;
