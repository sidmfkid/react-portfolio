import "../css/Home.css";
import "../css/Modal.css";
import HomeCard from "./HomeCard";
import QuickBar from "../components/QuickBar";
import Modal from "../components/UI/Modal";
import ArrowIcon from "../Menu/arrowIcon.svg";

import { useRef, useState } from "react";

function Home(props) {
  const home = useRef(null);
  const focusedElement = useRef(null);
  const pillElement = useRef(null);
  const cardContent = props.cardContent;
  const [filteredTag, setFilter] = useState("");
  const handleModalClick = props.handleModalClick;
  const currentStep = props.currentStep;

  // Filter Video Cards
  const filterChangeHandler = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const filteredCards = cardContent.filter((card) => {
    return card.tag === filteredTag;
  });
  let cards = cardContent.map((card) => (
    <HomeCard
      ref={focusedElement}
      key={card.title}
      title={card.title}
      channel={card.channel}
      info={card.info}
      postImage={card.postImage}
      channelImage={card.channelImage}
      tag={card.tag}
      step={currentStep}
    />
  ));

  if (filteredTag) {
    cards = filteredCards.map((card) => (
      <HomeCard
        key={card.title}
        title={card.title}
        channel={card.channel}
        info={card.info}
        postImage={card.postImage}
        channelImage={card.channelImage}
        tag={card.tag}
      />
    ));
  }
  if (filteredTag === "All") {
    cards = cardContent.map((card) => (
      <HomeCard
        key={card.title}
        title={card.title}
        channel={card.channel}
        info={card.info}
        postImage={card.postImage}
        channelImage={card.channelImage}
        tag={card.tag}
      />
    ));
  }

  return (
    <>
      <Modal
        step={currentStep}
        ArrowIcon={ArrowIcon}
        onModalClick={handleModalClick}
        position={focusedElement.current}
      />
      <div ref={home} className="home">
        <QuickBar
          ref={pillElement}
          step={currentStep}
          key="QuickBarHome"
          cards={cardContent}
          onChangeHandler={filterChangeHandler}
        />
        <div className="home__content">
          <div
            className={
              currentStep > 1 || currentStep.index > 1
                ? `home__content-grid step-${currentStep.index}`
                : "home__content-grid"
            }
          >
            {cards}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
