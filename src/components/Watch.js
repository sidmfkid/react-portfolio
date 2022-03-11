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
import VerifiedIcon from "../Menu/Video/VerifiedIcon.svg";
import SortByIcon from "../Menu/Video/SortByIcon.svg";
import DownIcon from "../Menu/Video/DownIcon.svg";
import SidmfkidAvi from "../images/avis/sidmfkid-avi.jpg";
import SpotifyThumbnail1 from "../images/thumbnails/spotifyThumbnail1.jpg";
import Comment from "./Comment";
import QuickBar from "./QuickBar";
import VideoCard from "./VideoCard";
// import { useRef } from "react";

function Watch(props) {
  // const scrollLeft = document.querySelector('#scrollLeft');
  // const scrollRight = document.querySelector('#scrollRight');

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
          <div className="main__content-left--video-channel">
            <div className="channel-info-container">
              <div className="avi-container">
                <img src={SidmfkidAvi} className="avi" alt="Avi"></img>
              </div>
              <div className="channel-details-container">
                <h2 className="channel-name">
                  Sidmfkid
                  <span>
                    <img src={VerifiedIcon} alt="Verified Icon"></img>
                  </span>
                </h2>
                <span className="channel-subs">100B subscribers</span>
              </div>
            </div>
            <div className="channel-subscribe-container">
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
          <div className="main__content-left--video-description">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
              tempus, feugiat potenti neque nullam faucibus purus faucibus.
              Risus vulputate sapien, faucibus enim non.
            </p>
            <span className="show-description">SHOW MORE</span>
          </div>
          <div className="main__content-left--video-border-2"></div>
          <div className="main__content-left--video-comments">
            <div className="main__content-left--video-comments-heading">
              <span>225 Comments</span>
              <span className="sort-icon">
                <img src={SortByIcon} alt="Sort By Icon"></img>Sort By
              </span>
            </div>
            <div className="main__content-left--video-comments-new-comment">
              <div className="avi">
                <img src={SidmfkidAvi} alt="Profile Avi"></img>
              </div>
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  for="comment"
                  placeholder="New Comment Here"
                ></input>
              </div>
            </div>
            <Comment
              SidmfkidAvi={SidmfkidAvi}
              LikeIcon={LikeIcon}
              DislikeIcon={DislikeIcon}
              DownIcon={DownIcon}
            />
            <Comment
              SidmfkidAvi={SidmfkidAvi}
              LikeIcon={LikeIcon}
              DislikeIcon={DislikeIcon}
              DownIcon={DownIcon}
            />
            <Comment
              SidmfkidAvi={SidmfkidAvi}
              LikeIcon={LikeIcon}
              DislikeIcon={DislikeIcon}
              DownIcon={DownIcon}
            />
            <Comment
              SidmfkidAvi={SidmfkidAvi}
              LikeIcon={LikeIcon}
              DislikeIcon={DislikeIcon}
              DownIcon={DownIcon}
            />
          </div>
        </div>

        <div className="main__content-right">
          <div className="main__content-right__content">
            <QuickBar />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
            <VideoCard
              SpotifyThumbnail1={SpotifyThumbnail1}
              VerifiedIcon={VerifiedIcon}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Watch;
