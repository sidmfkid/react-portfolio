import VerifiedIcon from "../Menu/Video/VerifiedIcon.svg";
import React, { forwardRef, useRef } from "react";

const HomeCard = React.forwardRef((props, ref) => {
  const title = props.title;
  const postImage = props.postImage;
  const channelImage = props.channelImage;
  const info = props.info;
  const channel = props.channel;
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
      ref={ref}
      className="home__content-grid--card"
    >
      <div className="image-container">
        <img src={postImage} alt={title}></img>
      </div>

      <div className="info-container">
        <div className="channel-avi">
          <img src={channelImage} alt={title}></img>
        </div>
        <div className="info">
          <div className="post-title">
            <span>{title}</span>
          </div>
          <div className="post-channel">
            <span>{channel}</span>
            <span className="icon-container">
              <img src={VerifiedIcon} alt="Verified Icon"></img>
            </span>
          </div>
          <div className="post-details">
            <span>{info}</span>
          </div>
        </div>
      </div>
    </a>
  );
});

export default HomeCard;
