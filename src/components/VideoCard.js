function VideoCard(props) {
  const handleize = function (str) {
    str = str.toLowerCase();

    var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];

    // For the old browsers
    for (var i = 0; i < toReplace.length; ++i) {
      str = str.replace(toReplace[i], "");
    }

    str = str.replace(/\W+/g, "-");

    if (str.charAt(str.length - 1) == "-") {
      str = str.replace(/-+\z/, "");
    }

    if (str.charAt(0) == "-") {
      str = str.replace(/\A-+/, "");
    }

    return str;
  };

  return (
    <a
      href={`/watch/${handleize(props.title)}`}
      className="main__content-right__content--thumb-wrapper"
    >
      <div className="thumbnail-wrapper">
        <img src={props.postImage} alt="Thumbnail For Video"></img>
      </div>
      <div className="info-wrapper">
        <h3 className="video-title">{props.title}</h3>
        <div className="channel-name">
          <span>{props.channel}</span>
          <img src={props.VerifiedIcon} alt="Verified Icon"></img>
        </div>
        <span className="video-details">{props.info}</span>
      </div>
    </a>
  );
}

export default VideoCard;
