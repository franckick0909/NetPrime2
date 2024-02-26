import "./Tv.scss";
import SlideDiscover from "../../components/SlideCardTv/SlideDiscover";
import SlideTopRated from "../../components/SlideCardTv/SlideTopRated";
import SlideToday from "../../components/SlideCardTv/SlidePopular";

const Tv = () => {
  return (
    <section className="tv">
      <h1 className="title-page titre">Série Tv, Emmission & Anime</h1>
      <div className="tv-discover">
        <h2 className="discover trait">
          Découvrez les séries et émissions à découvrir
        </h2>
        <SlideDiscover />
      </div>

      <div className="tv-topRated">
        <h2 className="topRated trait">
          Découvrez les séries les mieux notées
        </h2>
        <SlideTopRated />
      </div>

      <div className="tv-popular">
        <h2 className="popular trait">
          Découvrez les séries populaires du moment
        </h2>
        <SlideToday />
      </div>
    </section>
  );
};

export default Tv;
