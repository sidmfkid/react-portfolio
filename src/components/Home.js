import "../css/Home.css";
import HomeCard from "./HomeCard";
import nailShopThumb1 from "../images/thumbnails/24kThumbnail1.jpg";
import nailShopThumb2 from "../images/thumbnails/24kThumbnail2.jpg";
import ethThumb from "../images/thumbnails/ethThumbnail1.jpg";
import gitThumb from "../images/thumbnails/githubThumbnail1.jpg";
import sidThumb from "../images/thumbnails/sidmfkidThumbnail1.jpg";
import spotifyThumb from "../images/thumbnails/spotifyThumbnail1.jpg";
import youAreThumb1 from "../images/thumbnails/youAreThumbnail1.jpg";
import youAreThumb2 from "../images/thumbnails/youAreThumbnail2.jpg";
import nailSpaAvi from "../images/avis/24kNailSpaAvi.png";
import musicAvi from "../images/avis/musicAvi.png";
import sidAvi from "../images/avis/sidAvi.png";
import btcAvi from "../images/avis/btcAvi.png";
import githubAvi from "../images/avis/githubAvi.png";
import youAreAvi from "../images/avis/youAreAvi.png";

function Home(props) {
  const cardContent = [
    {
      title: "Advertising & Marketing For 24K Nail Spa",
      channel: "24K Nail Spa",
      info: "50K views • April 21 - Feb 22",
      postImage: nailShopThumb1,
      channelImage: nailSpaAvi,
    },
    {
      title: "Web Development For 24K Nail Spa",
      channel: "24K Nail Spa",
      info: "125K views • April 21 - Feb 22",
      postImage: nailShopThumb2,
      channelImage: nailSpaAvi,
    },
    {
      title: "Music Streaming Stats & More",
      channel: "Sidmfkid",
      info: "4M views • Oct 16 - Present",
      postImage: spotifyThumb,
      channelImage: musicAvi,
    },
    {
      title: "Knowledge Check, Lets See What I Know",
      channel: "Sid",
      info: "5,436 views • Mar 96’ - Present",
      postImage: sidThumb,
      channelImage: sidAvi,
    },
    {
      title: "What The Futue Looks Like (NOT FINANCIAL ADVICE)",
      channel: "Sidmfkid",
      info: "4M views • Oct 16 - Present",
      postImage: ethThumb,
      channelImage: btcAvi,
    },
    {
      title: "Let’s git LIT!!! Github SPEEDRUN!!!",
      channel: "Coding With Sid",
      info: "50K views • github.com",
      postImage: gitThumb,
      channelImage: githubAvi,
    },
    {
      title: "Advertising & Marketing For You Are",
      channel: "You Are",
      info: "540K views • Jan ‘21 - July ‘21",
      postImage: youAreThumb1,
      channelImage: youAreAvi,
    },
    {
      title: "Web Development For You Are",
      channel: "You Are",
      info: "150K views • Jan ‘21 - July ‘21",
      postImage: youAreThumb2,
      channelImage: youAreAvi,
    },
  ];

  const cards = cardContent.map((card) => (
    <HomeCard
      title={card.title}
      channel={card.channel}
      info={card.info}
      postImage={card.postImage}
      channelImage={card.channelImage}
    />
  ));
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content-grid">{cards}</div>
      </div>
    </div>
  );
}

export default Home;
