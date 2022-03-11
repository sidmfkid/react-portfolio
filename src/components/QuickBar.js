import ChevronRightIcon from "../Menu/ChevronRightIcon.svg";
import ChevronLeftIcon from "../Menu/ChevronLeftIcon.svg";
import { useRef } from "react";
import "../css/QuickBar.css";
import Pill from "./Pill";

function QuickBar(props) {
  const quickBar = useRef(null);

  function scrollSmoothRight(e) {
    console.log(quickBar, e.target);
    quickBar.current.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function scrollSmoothLeft(e) {
    console.log(quickBar, e.target);

    quickBar.current.scroll({
      top: 0,
      left: quickBar.current.scrollLeftMax,
      behavior: "smooth",
    });
  }
  return (
    <div className="quick-wrapper">
      <div
        onClick={scrollSmoothRight.bind(this)}
        id="scrollLeft"
        className="chevron-left"
      >
        <img src={ChevronLeftIcon} alt="Chevron Left Icon"></img>
      </div>
      <div ref={quickBar} className="quick-bar">
        <div className="quick-bar__pill-container">
          <form id="quickBar">
            <Pill pillTitle="All" />
            <Pill pillTitle="Music" />
            <Pill pillTitle="Development" />
            <Pill pillTitle="Design" />
            <Pill pillTitle="Advertising" />
          </form>
        </div>
      </div>
      <div
        onClick={scrollSmoothLeft.bind(this)}
        id="scrollRight"
        className="chevron-right"
      >
        <img src={ChevronRightIcon} alt="Chevron Right Icon"></img>
      </div>
    </div>
  );
}

export default QuickBar;
