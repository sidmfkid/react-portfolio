import { useState } from "react";
import "./css/styles.css";
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
import { useCookies } from "react-cookie";

import "./css/App.css";

function App() {
  const [isToggled, menuToggler] = useState(false);
  const [isTagToggled, tagToggler] = useState("");
  const [currentStep, setStep] = useState(0);
  const [isIntroFinished, setIntroState] = useState(false);
  const [cookies, setCookie] = useCookies(["isIntroFinished"]);
  const steps = [
    {
      heading: "Welcome to Sidtube",
      subheading: "Let me show you around the place.",
    },
    {
      heading: "Before We Get Started",
      subheading: "This Portfolio a work in progress",
    },
    {
      heading: "",
      subheading:
        "Each thumbnail will take you to a page where (eventually)you will be able to watch a video made by me covering the project/topic",
    },
    {
      heading: "",
      subheading:
        "Here we have a way foryou to filter by tag. This way you can find exactly what you’re looking for.",
    },
    {
      heading: "",
      subheading: "You can also use this side menu to filter by tag",
    },
    {
      heading: "",
      subheading:
        "These icons have no functionality at this time and sole purpose is aesthetics",
    },
    {
      heading: "",
      subheading:
        "The reason I did a remake of youtube for my portfolio is because it has been a valuable resource to me as someone self taught.",
    },
  ];

  const nextStep = steps.filter((step) => {
    return step.index + 1 === currentStep;
  });

  const handleModalClick = (event) => {
    setStep({
      step: steps[Number(event.target.attributes[0].value) + 1],
      index: Number(event.target.attributes[0].value) + 1,
    });
    console.log(currentStep.index, event, nextStep);
    handleIntroState();
    console.log(isIntroFinished);
  };

  const handleIntroState = (e) => {
    if (currentStep.index > 5 || e.target.className === "modal-exit-button") {
      setCookie("isIntroFinished", true, {
        path: "/",
        // expires: Number(Date.now() + 1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: true,
      });
      setIntroState(true);
    }
  };

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
      <Nav
        currentStep={currentStep}
        isToggled={isToggled}
        menuToggler={toggle}
      />
      <SideMenu
        currentStep={currentStep}
        isExpanded={isToggled}
        icons={icons}
      />
      <Routes>
        <Route
          exact
          path="/watch/:Id"
          element={
            <Watch
              handleize={handleize}
              cardContent={cardContent}
              isTagToggled={isTagToggled}
              tagToggler={toggleTag}
              menuExpanded={isToggled}
              currentStep={currentStep}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              cookies={cookies}
              handleIntroState={handleIntroState}
              isIntroFinished={isIntroFinished}
              handleModalClick={handleModalClick}
              currentStep={currentStep}
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
