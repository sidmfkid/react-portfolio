import "../css/Home.css";
import "../css/Modal.css";
import HomeCard from "./HomeCard";
import QuickBar from "../components/QuickBar";
import Modal from "../components/UI/Modal";
import ArrowIcon from "../Menu/arrowIcon.svg";

import { useRef, useState } from "react";

function Home(props) {
  const home = useRef(null);
  const [filteredTag, setFilter] = useState("");
  const filterChangeHandler = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const cardContent = props.cardContent;

  const filteredCards = cardContent.filter((card) => {
    return card.tag === filteredTag;
  });
  let cards = cardContent.map((card) => (
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

  console.log(home);
  return (
    <>
      <Modal ArrowIcon={ArrowIcon} />
      <div ref={home} className="home">
        <QuickBar
          key="QuickBarHome"
          cards={cardContent}
          onChangeHandler={filterChangeHandler}
        />
        <div className="home__content">
          <div className="home__content-grid">{cards}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
