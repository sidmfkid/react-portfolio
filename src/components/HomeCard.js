import VerifiedIcon from "../Menu/Video/VerifiedIcon.svg";

function HomeCard(props) {
  const title = props.title;
  const postImage = props.postImage;
  const channelImage = props.channelImage;
  const info = props.info;
  const channel = props.channel;
  return (
    <div className="home__content-grid--card">
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
    </div>
  );
}

export default HomeCard;
