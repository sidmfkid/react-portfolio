import "../css/Main.css";
import PlayIcon from "../Menu/Video/PlayIcon.svg";
import NextIcon from "../Menu/Video/NextIcon.svg";
import VolumeIcon from "../Menu/Video/VolumeIcon.svg";
import ClosedCaptionsIcon from "../Menu/Video/ClosedCaptionsIcon.svg";
import SettingsIcon from "../Menu/Video/SettingsIcon.svg";
import MiniPlayerIcon from "../Menu/Video/MiniPlayerIcon.svg";
import FullScreenIcon from "../Menu/Video/FullScreenIcon.svg";
import LikeIcon from "../Menu/Video/LikeIcon.svg";
import DislikeIcon from "../Menu/Video/DislikeIcon.svg";
import ShareIcon from "../Menu/Video/ShareIcon.svg";
import ClipIcon from "../Menu/Video/ClipIcon.svg";
import SaveIcon from "../Menu/Video/SaveIcon.svg";
import MoreOptionsIcon from "../Menu/Video/MoreOptionsIcon.svg";
function Main(props) {
  return (
    <main className={props.menuExpanded ? "main menu-expanded" : "main"}>
      <div className="overlay"></div>
      <div className="main__content">
        <div className="main__content-left">
          <div className="main__content-left--video-container">
            <iframe title="video"></iframe>
            <div className="action-bar">
              <div className="action-bar__content">
                <div className="action-bar__content-timeline">
                  <div className="buffered"></div>
                  <div className="currentTime"></div>
                </div>
                <div className="action-bar__content-left">
                  <img src={PlayIcon} alt="Play Icon"></img>
                  <img src={NextIcon} alt="Next Icon"></img>
                  <div className="volume-container">
                    <img src={VolumeIcon} alt="Volume Icon"></img>
                    <div className="slider-container">
                      <div className="slider-bar"></div>
                      <div className="slider-circle"></div>
                    </div>
                  </div>
                  <div className="time">
                    <span className="current-time">0:00</span>
                    <span> / </span>
                    <span className="full-time">3:45</span>
                  </div>
                </div>
                <div className="action-bar__content-right">
                  <img
                    src={ClosedCaptionsIcon}
                    alt="Closed Captions Icon"
                  ></img>
                  <img src={SettingsIcon} alt="Settings Icon"></img>
                  <img src={MiniPlayerIcon} alt="Mini Player Icon"></img>
                  <img src={FullScreenIcon} alt="Full Screen Icon"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="main__content-left--video-title">
            <h1>MUSIC STREAMING STATS & MORE</h1>
          </div>
          <div className="main__content-left--video-info">
            <div className="main__content-left--video-info__stats">
              <span>50K views • April ‘21 - Feb ‘22</span>
            </div>
            <div className="main__content-left--video-info__icons">
              <div className="icon">
                <img src={LikeIcon} alt="Like Icon"></img>
                <span>3.5K</span>
              </div>
              <div className="icon">
                <img src={DislikeIcon} alt="Dislike Icon"></img>
                <span>DISLIKE</span>
              </div>
              <div className="icon">
                <img src={ShareIcon} alt="Share Icon"></img>
                <span>SHARE</span>
              </div>
              <div className="icon">
                <img src={ClipIcon} alt="Clip Icon"></img>
                <span>CLIP</span>
              </div>
              <div className="icon">
                <img src={SaveIcon} alt="Save Icon"></img>
                <span>SAVE</span>
              </div>
              <div className="icon">
                <img src={MoreOptionsIcon} alt="More Options Icon"></img>
              </div>
            </div>
          </div>
          <div className="main__content-left--video-border"></div>
        </div>
        <div className="main__content-right">
          <div className="main__content-right__content"></div>
        </div>
      </div>
    </main>
  );
}

export default Main;
