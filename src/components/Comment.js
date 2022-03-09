function Comment(props) {
  const SidmfkidAvi = props.SidmfkidAvi;
  const LikeIcon = props.LikeIcon;
  const DislikeIcon = props.DislikeIcon;
  const DownIcon = props.DownIcon;

  return (
    <div className="main__content-left--video-comments-comment">
      <div className="avi-container">
        <img src={SidmfkidAvi} alt="Profile Avi"></img>
      </div>
      <div className="comment-info-container">
        <div className="username-date">
          <span>Darius K</span>
          <span>1 year ago</span>
        </div>
        <div className="comment">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            massa tellus ut turpis pharetra nulla tortor tortor. Malesuada vel
            viverra bibendum cursus nulla pharetra molestie.
          </p>
        </div>

        <div className="like-dislike-container">
          <div className="like-container">
            <img src={LikeIcon} alt="Like Icon"></img>
            <span>1.2K</span>
          </div>
          <div className="dislike-container">
            <img src={DislikeIcon} alt="Disike Icon"></img>
          </div>
        </div>
        <div className="view-replies-container">
          <div className="icon-container">
            <img src={DownIcon} alt="Profile Avi"></img>
          </div>
          <span>View 21 Replies</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
