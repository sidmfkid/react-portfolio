import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Watch from "./components/Watch";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import HomeIcon from "./Menu/HomeIcon.svg";
import MusicIcon from "./Menu/MusicIcon.svg";
import BracketIcon from "./Menu/BracketIcon.svg";
import AdobeIcon from "./Menu/AdobeIcon.svg";
import AdsIcon from "./Menu/AdIcon.svg";
import nailShopThumb1 from "./images/thumbnails/24kThumbnail1.jpg";
import nailShopThumb2 from "./images/thumbnails/24kThumbnail2.jpg";
import ethThumb from "./images/thumbnails/ethThumbnail1.jpg";
import gitThumb from "./images/thumbnails/githubThumbnail1.jpg";
import sidThumb from "./images/thumbnails/sidmfkidThumbnail1.jpg";
import spotifyThumb from "./images/thumbnails/spotifyThumbnail1.jpg";
import youAreThumb1 from "./images/thumbnails/youAreThumbnail1.jpg";
import youAreThumb2 from "./images/thumbnails/youAreThumbnail2.jpg";
import nailSpaAvi from "./images/avis/24kNailSpaAvi.png";
import musicAvi from "./images/avis/musicAvi.png";
import sidAvi from "./images/avis/sidAvi.png";
import btcAvi from "./images/avis/btcAvi.png";
import githubAvi from "./images/avis/githubAvi.png";
import youAreAvi from "./images/avis/youAreAvi.png";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";

import "./css/App.css";

function App() {
  const [isToggled, menuToggler] = useState(false);
  const [isTagToggled, tagToggler] = useState("");

  const icons = [
    {
      icon: HomeIcon,
      text: "Home",
    },
    { icon: MusicIcon, text: "Music" },
    { icon: BracketIcon, text: "Dev Work" },
    { icon: AdobeIcon, text: "Design" },
    { icon: AdsIcon, text: "Ads" },
  ];

  const cardContent = [
    {
      title: "Advertising & Marketing For 24K Nail Spa",
      channel: "24K Nail Spa",
      info: "50K views • April 21 - Feb 22",
      postImage: nailShopThumb1,
      channelImage: nailSpaAvi,
      tag: "Advertising",
    },
    {
      title: "Web Development For 24K Nail Spa",
      channel: "24K Nail Spa",
      info: "125K views • April 21 - Feb 22",
      postImage: nailShopThumb2,
      channelImage: nailSpaAvi,
      tag: "Development",
    },
    {
      title: "Music Streaming Stats & More",
      channel: "Sidmfkid",
      info: "4M views • Oct 16 - Present",
      postImage: spotifyThumb,
      channelImage: musicAvi,
      tag: "Music",
    },
    {
      title: "Knowledge Check, Lets See What I Know",
      channel: "Sid",
      info: "5,436 views • Mar 96’ - Present",
      postImage: sidThumb,
      channelImage: sidAvi,
      tag: "Education",
    },
    {
      title: "What The Futue Looks Like (NOT FINANCIAL ADVICE)",
      channel: "Sidmfkid",
      info: "4M views • Oct 16 - Present",
      postImage: ethThumb,
      channelImage: btcAvi,
      tag: "BlockChain",
    },
    {
      title: "Let’s git LIT!!! Github SPEEDRUN!!!",
      channel: "Coding With Sid",
      info: "50K views • github.com",
      postImage: gitThumb,
      channelImage: githubAvi,
      tag: "Development",
    },
    {
      title: "Advertising & Marketing For You Are",
      channel: "You Are",
      info: "540K views • Jan ‘21 - July ‘21",
      postImage: youAreThumb1,
      channelImage: youAreAvi,
      tag: "Advertising",
    },
    {
      title: "Web Development For You Are",
      channel: "You Are",
      info: "150K views • Jan ‘21 - July ‘21",
      postImage: youAreThumb2,
      channelImage: youAreAvi,
      tag: "Development",
    },
  ];

  const toggle = () => {
    menuToggler((prev) => !prev);
    console.log(isToggled);
  };
  function toggleTag(e) {
    tagToggler((e) => console.log(e));
    console.log(isTagToggled);
  }

  return (
    <>
      <Nav isToggled={isToggled} menuToggler={toggle} />
      <SideMenu isExpanded={isToggled} icons={icons} />
      <Routes>
        <Route
          exact
          path="/watch"
          element={
            <Watch
              cardContent={cardContent}
              isTagToggled={isTagToggled}
              tagToggler={toggleTag}
              menuExpanded={isToggled}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              cardContent={cardContent}
              isTagToggled={isTagToggled}
              tagToggler={toggleTag}
              menuExpanded={isToggled}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
