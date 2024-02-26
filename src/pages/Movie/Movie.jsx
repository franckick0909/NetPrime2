import "./Movie.scss";
import Header from "../../components/Header/Header";
import SlideMovieDiscover from "../../components/SlideCardMovie/SlideMovieDiscover";
import SlideMovieTopRated from "../../components/SlideCardMovie/SlideMovieTopRated";
import SlideMoviePopular from "../../components/SlideCardMovie/SlideMoviePopular";

const Movie = () => {


    return (
      <section className="movie">
        <Header />
        <h1 className="title-page titre">Films</h1>

        <div className="movie-discover">
          <h2 className="discover trait">
            Découvrez les films à découvrir
          </h2>
          <SlideMovieDiscover />
        </div>

        <div className="movie-topRated">
          <h2 className="topRated trait">Découvrez les films les mieux notées</h2>
          <SlideMovieTopRated />
        </div>

        <div className="movie-popular">
          <h2 className="popular trait">Découvrez les films populaires du moment</h2>
          <SlideMoviePopular />
        </div>
      </section>
    );
};

export default Movie;