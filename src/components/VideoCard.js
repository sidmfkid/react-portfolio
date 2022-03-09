function VideoCard(props) {
  return (
    <div className="main__content-right__content--thumb-wrapper">
      <div className="thumbnail-wrapper">
        <img src={props.SpotifyThumbnail1} alt="Thumbnail For Video"></img>
      </div>
      <div className="info-wrapper">
        <h3 className="video-title">Advertising For 24K Nail Spa</h3>
        <div className="channel-name">
          <span>24K Nail Spa</span>
          <img src={props.VerifiedIcon} alt="Verified Icon"></img>
        </div>
        <span className="video-details">50K views • April ‘21 - Feb ‘22</span>
      </div>
    </div>
  );
}

export default VideoCard;
