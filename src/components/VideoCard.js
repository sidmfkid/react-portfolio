function VideoCard(props) {
  return (
    <div className="main__content-right__content--thumb-wrapper">
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
    </div>
  );
}

export default VideoCard;
