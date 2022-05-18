import ChevronRightIcon from "../Menu/ChevronRightIcon.svg";
import ChevronLeftIcon from "../Menu/ChevronLeftIcon.svg";
import React, { useRef, forwardRef } from "react";
import "../css/QuickBar.css";
import Pill from "./Pill";

const QuickBar = React.forwardRef((props, ref) => {
  const quickBar = useRef(null);
  const cards = props.cards;

  function uniqueTags(val, index, self) {
    return self.indexOf(val) === index;
  }
  const cardTags = cards.map((card) => card.tag);
  const allTags = cardTags.filter(uniqueTags);

  const filterChangeHandler = (event) => {
    props.onChangeHandler(event.target.value);
  };

  let allcards = allTags.map((tag) => {
    return (
      <div ref={ref} className="pill-wrapper">
        <input
          onChange={filterChangeHandler}
          name="quickBarFilter"
          type="radio"
          value={tag}
          id={"pill" + tag}
        ></input>
        <label className="pill" for={"pill" + tag}>
          <span>{tag}</span>
        </label>
      </div>
    );
  });

  if (props.step.index === 3) {
    allcards = allTags.map((tag) => {
      return (
        <div ref={ref} className="pill-wrapper focused">
          <input
            onChange={filterChangeHandler}
            name="quickBarFilter"
            type="radio"
            value={tag}
            id={"pill" + tag}
          ></input>
          <label className="pill" for={"pill" + tag}>
            <span>{tag}</span>
          </label>
        </div>
      );
    });
  }
  if (props.step.index > 6) {
    allcards = allTags.map((tag) => {
      return (
        <div ref={ref} className="pill-wrapper">
          <input
            onChange={filterChangeHandler}
            name="quickBarFilter"
            type="radio"
            value={tag}
            id={"pill" + tag}
          ></input>
          <label className="pill" for={"pill" + tag}>
            <span>{tag}</span>
          </label>
        </div>
      );
    });
  }
  // console.log(allcards, cards);

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
          <form value={props.selected} id="quickBar">
            <div
              className={
                props.step.index === 3 ? "pill-wrapper focused" : "pill-wrapper"
              }
            >
              <input
                onChange={filterChangeHandler}
                name="quickBarFilter"
                type="radio"
                value="All"
                id="pillAll"
              ></input>
              <label className="pill" for="pillAll">
                <span>All</span>
              </label>
            </div>
            {allcards}
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
});

export default QuickBar;
